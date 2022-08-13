import { useAuth0 } from "@rturnq/solid-auth0";
import { Component, createResource } from "solid-js";

const App: Component = () => {
	const auth = useAuth0();
	const [userToken] = createResource(() => auth && auth.getToken());

	return (
		<div>
			<div class='p-2 my bg-blue-200 w-fit flex flex-col rounded-sm'>
				<div>user: {JSON.stringify(auth?.user())}</div>
				<div>user token: {JSON.stringify(userToken())}</div>
				<div>isAuthenticated: {JSON.stringify(auth?.isAuthenticated())}</div>
			</div>
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
