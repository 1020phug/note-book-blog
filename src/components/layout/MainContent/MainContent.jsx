import React from "react";

const MainContent = ({ children }) => {
	return (
		<main className="min-h-screen pt-16 px-28 mx-auto bg-[#F2F8F7]">
			{children}
		</main>
	);
};

export default MainContent;
