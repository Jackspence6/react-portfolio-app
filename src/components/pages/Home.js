// Imports
import React from "react";
// Icons for Homepage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Exports
export default function Home() {
	return (
		<div>
			<div>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/jack-spence-1567b523b/">
							<FontAwesomeIcon
								icon={faLinkedin}
								size="xl"
								style={{ color: "#050505" }}
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/Jackspence6">
							<FontAwesomeIcon
								icon={faGithub}
								size="xl"
								style={{ color: "#050505" }}
							/>{" "}
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
