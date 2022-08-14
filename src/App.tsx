import { useAuth0 } from "@rturnq/solid-auth0";
import { Component, createResource, createSignal } from "solid-js";
import { createTrpcMutation, createTrpcQuery } from "./lib/trpc.ts/trpc";

const App: Component = () => {
	const auth = useAuth0();
	const [userToken] = createResource(() => auth && auth.getToken());
	const [todos, { refetch }] = createTrpcQuery("get-todos");
	const { mutate: createTodo } = createTrpcMutation("create-todo");
	const [newTodo, setNewTodo] = createSignal("");
	return (
		<div>
			<div class='p-2 my bg-blue-200 w-fit flex flex-col rounded-sm'>
				<div>user: {JSON.stringify(auth?.user())}</div>
				<div>user token: {JSON.stringify(userToken())}</div>
				<div>isAuthenticated: {JSON.stringify(auth?.isAuthenticated())}</div>
				<div>todos: {JSON.stringify(todos())}</div>
			</div>
			<form
				action='post'
				onsubmit={(e) => {
					e.preventDefault();
					createTodo({ title: newTodo() });
					setNewTodo("");
					refetch();
				}}>
				<input
					placeholder='add todo'
					value={newTodo()}
					oninput={(e) => setNewTodo(e.target.value)}
				/>
				<button>Submit</button>
			</form>
			<button
				onclick={() => {
					if (!auth) return;
					auth.loginWithRedirect();
				}}>
				login
			</button>
			<header>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
			</header>
		</div>
	);
};

export default App;
