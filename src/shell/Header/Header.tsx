import './Header.css'

export default function Header() {
	return (
		<header className="app-header" data-testid="shell-header">
			<nav className="app-nav">
				<div className="app-nav-home">
					{
						// TODO: add logo
					}
					<a href="#">Home</a>
				</div>
				<div className="app-nav-controls">
					<ul>
						{/*
							TODO: authentication
						 */}
						<li>Log In</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}
