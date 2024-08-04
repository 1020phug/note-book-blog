const Author = ({ image, name, date, time }) => {
	return (
		<div className="flex gap-4 items-center my-6">
			<img src={image} alt={name} className="w-5 h-5 rounded-full" />
			<span className="text-gray-500">{name}</span>
			{" | "}
			<p className="text-gray-500">{date}</p>
			{" | "}
			<p className="text-gray-500">{time}</p>
		</div>
	);
};

export default Author;
