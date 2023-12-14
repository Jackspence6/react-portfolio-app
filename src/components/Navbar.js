// Imports
import React from "react";
import "../styles/Navbar.css";
// Icons for Navbar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Function to render Navbar & handle page changes
function Navbar({ currentPage, handlePageChange, resumeUrl }) {
	return (
		<nav id="navContainer" className="navbar navbar-expand-lg">
			<div
				className="container-fluid"
				style={{ display: "flex", justifyContent: "flex-end" }}
			>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							id="navItem"
							className="nav-link"
							href={resumeUrl}
							download="JackSpenceResume.pdf"
						>
							<FontAwesomeIcon
								icon={faDownload}
								size="xl"
								style={{ color: "#FFFFFF" }}
								className="resumeIcon"
							/>
							Résumé
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

// Exports
export default Navbar;
