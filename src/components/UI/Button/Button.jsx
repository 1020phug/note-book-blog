export default function Button({ className, children }) {
	return (
		<button className={`bg-blue-500 ${className || ""}`}>{children}</button>
	);
}
