import type { Component } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
	return (
		<div>
			<header>
				<img src={logo} alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					class='bg-white text-gray-700 text-sm rounded p-2'
					href='https://github.com/solidjs/solid'
					target='_blank'
					rel='noopener noreferrer'>
					Learn Solid
				</a>
			</header>
		</div>
	);
};

export default App;
