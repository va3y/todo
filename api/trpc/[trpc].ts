import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const appRouter = trpc
	.router()
	.query("get-todos", {
		async resolve() {
			const todos = await prisma.todo.findMany({});

			return todos;
		},
	})
	.mutation("create-todo", {
		input: z.object({
			title: z.string(),
		}),
		async resolve({ input: { title } }) {
			const voteInDb = await prisma.todo.create({
				data: {
					title,
				},
			});
			return { success: true, vote: voteInDb };
		},
	});

export type AppRouter = typeof appRouter;

const createContext = (opts: trpcNext.CreateNextContextOptions) => opts;

// export API handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: createContext as any,
});
