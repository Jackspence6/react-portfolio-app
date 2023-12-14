// Imports
import React from "react";
// Icons for Homepage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Typing animation
import { TypeAnimation } from "react-type-animation";
import "../../styles/Home.css";

// Exports
export default function Home() {
	return (
		<div id="homeContainer">
			<div id="leftDiv">
				<ul id="socialLinks">
					<li>
						<a
							href="https://www.linkedin.com/in/jack-spence-1567b523b/"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="xl"
								style={{ color: "#FFFFFF" }}
								className="socialIcon"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Jackspence6"
							rel="noreferrer"
							target="_blank"
						>
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
				<div id="aboutContainer">
					<h1 id="name">Jack</h1>
					<h2 id="surname">Spence</h2>
					<h3 id="role">Full Stack Developer</h3>
					<hr />
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
				</div>
				<h3 id="workHeading">My Work</h3>
				<hr />
				<div id="workContainer">
					{/* AI Learning Portal */}
					<div className="workItemCard">
						<h4 className="itemName">AI Learning Portal</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://ai-learning-portal-c3740c057c06.herokuapp.com/"
							className="container-work"
							id="ai-learning-portal"
						>
							{" "}
						</a>
					</div>
					{/* NoSQL: Social Network API */}
					<div className="workItemCard">
						<h4 className="itemName">Social Network API</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Jackspence6/NoSQL-social-network-api"
							className="container-work"
							id="social-network-api"
						>
							{" "}
						</a>
					</div>
					{/* Tech Blog: A Developer's Tech Blog Platform */}
					<div className="workItemCard">
						<h4 className="itemName">Tech Blog</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Jackspence6/tech-blog/tree/main"
							className="container-work"
							id="tech-blog"
						>
							{" "}
						</a>
					</div>
					{/* Weather Dashboard */}
					<div className="workItemCard">
						<h4 className="itemName">Weather Dashboard</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://jackspence6.github.io/weather-dashboard/"
							className="container-work"
							id="weather-dashboard"
						>
							{" "}
						</a>
					</div>
					{/* E-Commerce Back End */}
					<div className="workItemCard">
						<h4 className="itemName">E-Commerce Back End</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Jackspence6/e-commerce-back-end-ORM-"
							className="container-work"
							id="eCommerce-back-end"
						>
							{" "}
						</a>
					</div>
					{/* SQL: EmployeeTracker */}
					<div className="workItemCard">
						<h4 className="itemName">EmployeeTracker</h4>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Jackspence6/EmployeeTrackerSQL"
							className="container-work"
							id="employee-tracker"
						>
							{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
