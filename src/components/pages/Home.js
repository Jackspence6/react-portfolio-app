// Imports
import React from "react";
// Icons for Homepage
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Icon from "@mui/material/Icon";

// Exports
export default function Home() {
	return (
		<div>
			<div>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/jack-spence-1567b523b/">
							<Icon component={LinkedInIcon} color="action"></Icon>
						</a>
					</li>
					<li>
						<a href="https://github.com/Jackspence6">
							<Icon component={GitHubIcon} color="action"></Icon>
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h1>Jack</h1>
				<h2>Spence</h2>
				<h3>Full Stack Developer</h3>
				<p></p>
			</div>
			<div></div>
		</div>
	);
}
