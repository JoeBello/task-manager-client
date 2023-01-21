import React from 'react';
import './App.css';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<nav className="app-nav">
					<div className="app-nav-home">
						{/* logo/icon */}
						<a href="#">Home</a>
					</div>
					<div className="app-nav-controls">
						<ul>
							<li>Add Task</li>
							<li>Search</li>
							{/* <li>Sign Up/Login</li> */}
						</ul>
					</div>

				</nav>
			</header>
		</div>
	);
}

export default App;
