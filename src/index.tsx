/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Auth0 } from "@rturnq/solid-auth0";

render(
	() => (
		<Auth0
			domain='dev-y6z2zt8c.us.auth0.com' // domain from Auth0
			clientId='LjqgouVID7on7CViu9slrDx6yZUAXo9M' // client_id from Auth0
			logoutRedirectUri={`${window.location.origin}/logout`} // Absolute URI Auth0 logout redirect
			loginRedirectUri={`${window.location.origin}/`} // Absolute URI Auth0 login
		>
			<App />
		</Auth0>
	),
	document.getElementById("root") as HTMLElement
);
