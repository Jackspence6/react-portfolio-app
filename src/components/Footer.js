// Imports
import "../styles/Footer.css";
// Icons for Footer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Function to render Footer
function Footer() {
	return (
		<footer className="page-footer">
			<div className="footer-container">
				<div className="row">
					<div className="col l6 s12">
						<p id="footerAbout" className="grey-text text-lighten-4">
							Welcome to my personal portfolio, showcasing my skills and
							projects as a full-stack developer. Built with React, it
							highlights my expertise in creating dynamic applications,
							featuring a sleek design and efficient navigation.
						</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 id="getInTouch" className="white-text">
							Get In Touch!
						</h5>
						<ul className="right-align">
							<li style={{ listStyle: "none" }}>
								<a
									className="grey-text text-lighten-3"
									href="mailto:jackspence.dev@gmail.com"
								>
									<FontAwesomeIcon
										icon={faEnvelope}
										size="xl"
										style={{ color: "#FFFFFF" }}
										className="footerIcon"
									/>
								</a>
							</li>
							<li style={{ listStyle: "none", height: "3rem" }}>
								<a
									className="grey-text text-lighten-3"
									href="https://github.com/Jackspence6"
								>
									<FontAwesomeIcon
										icon={faGithub}
										size="xl"
										style={{ color: "#FFFFFF" }}
										className="footerIcon"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div>
					<p>&copy; 2023 Jack Spence. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

// Exports
export default Footer;
