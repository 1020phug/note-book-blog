const Tag = ({ disabled, children }) => {
	console.log(disabled);
	return (
		<span
			className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 ${
				disabled ? "bg-gray-200 text-gray-700" : "bg-emerald-600 text-yellow-50"
			}`}
		>
			{children}
		</span>
	);
};

export default Tag;
