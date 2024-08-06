import Button from "../../components/UI/Button/Button";

const Login = () => {
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-1/3 mx-auto">
				<label
					htmlFor="username"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Username
				</label>
				<div className="mt-2 rounded-md shadow-sm">
					<input
						id="username"
						name="username"
						type="text"
						placeholder="Your username..."
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<label
					htmlFor="password"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Password
				</label>
				<div className="mt-2 rounded-md shadow-sm">
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Your password..."
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<Button className="w-1/4 mx-auto block rounded-sm text-3xl text-slate-300">
				Login
			</Button>
		</>
	);
};

export default Login;
