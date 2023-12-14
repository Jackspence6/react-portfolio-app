// Imports
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";

// Function to render Portfolio
function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("Home");

	// Checking what page user should be on
	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
	};

	// Function to handle the page change for the user
	const handlePageChange = (page) => setCurrentPage(page);

	// Url for my Resume Document
	const resumeUrl =
		process.env.PUBLIC_URL + "/Jack_Spence_-_Software_Developer.pdf";

	// Returning the correct page to the User
	return (
		<div>
			<Navbar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
				resumeUrl={resumeUrl}
			/>
			{renderPage()}
		</div>
	);
}

// Exports
export default PortfolioContainer;
