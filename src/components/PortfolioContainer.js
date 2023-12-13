// Imports
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

// Function to render Portfolio
function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("Home");

	// Checking what page user should be on
	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
	};

	// Function to handle the page change for the user
	const handlePageChange = (page) => setCurrentPage(page);

	// Returning the correct page to the User
	return (
		<div>
			<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
		</div>
	);
}

// Exports
export default PortfolioContainer;
