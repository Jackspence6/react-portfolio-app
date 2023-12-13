// Imports
import React from "react";
import "../../styles/Home.css";
// Icons for Homepage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Typing animation
import { TypeAnimation } from "react-type-animation";

// Exports
export default function Home() {
	return (
		<div id="homeContainer">
			<div id="leftDiv">
				<ul id="socialLinks">
					<li>
						<a href="https://www.linkedin.com/in/jack-spence-1567b523b/">
							<FontAwesomeIcon
								icon={faLinkedin}
								size="xl"
								style={{ color: "#FFFFFF" }}
								className="socialIcon"
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/Jackspence6">
							<FontAwesomeIcon
								icon={faGithub}
								size="xl"
								style={{ color: "#FFFFFF" }}
								className="socialIcon"
							/>
						</a>
					</li>
				</ul>
			</div>
			<div id="middleDiv">
				<h1 id="name">Jack</h1>
				<h2 id="surname">Spence</h2>
				<h3 id="role">Full Stack Developer</h3>
				<hr />
				<p>
					<TypeAnimation
						sequence={[
							"Hi, my name is Jack Spence - A Full-Stack Engineer with a Vision for the Future! Having successfully completed a rigorous Full-Stack Engineering boot camp, I am now poised to dive deeper into the realms of technology that fascinate me the most - generative AI and machine learning. My journey in software development, enriched by my background in marketing, has provided me with a unique perspective on how technology can be leveraged to not just meet but anticipate user needs. My experience has endowed me with a robust foundation in various programming languages and frameworks. I am now keen on focusing my skills towards the cutting-edge fields of generative AI and machine learning. I am particularly interested in exploring how these technologies can be used to create innovative solutions and push the boundaries of what's possible in tech. Looking ahead, my goal is to be at the forefront of the AI revolution, contributing to projects that utilize AI and ML to solve complex problems, enhance user experiences, and open up new possibilities. I aspire to be part of teams and projects that are not just technology-driven but also vision-oriented, creating a future where technology acts as a catalyst for positive change and unprecedented innovation.",
						]}
						wrapper="p"
						speed={75}
						style={{
							fontSize: "15px",
							display: "inline-block",
							fontFamily: "monospace",
						}}
						repeat={0}
						deletionSpeed={90}
					/>
				</p>
			</div>
		</div>
	);
}
