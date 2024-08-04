import React from "react";

const Heading = ({ group, firstEl, secondEl, children }) => {
	const [first, second] = children.split(" ");
	return (
		<span className={`inline-block capitalize ${group || ""}`}>
			<span
				className={`bg-emerald-600 text-yellow-50 font-medium ${firstEl || ""}`}
			>
				{first}
			</span>{" "}
			<span className={`font-bold ${secondEl || ""}`}>{second}</span>
		</span>
	);
};

export default Heading;
