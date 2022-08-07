import type { VercelRequest, VercelResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
	await prisma.todo.create({
		data: {
			title: "af",
		},
	});
	const allRecords = await prisma.todo.findMany();

	res.send(res.json(allRecords));
};

export default handleRequest;
