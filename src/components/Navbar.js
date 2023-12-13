// Imports
import React from "react";

// Function to render Navbar
function Navbar({ currentPage, handlePageChange }) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#Home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#Projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#About">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#Contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

// Exports
export default Navbar;
