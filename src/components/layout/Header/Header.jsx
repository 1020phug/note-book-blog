import { Link } from "react-router-dom";
import {
	RiArrowDownSFill,
	RiSearchLine,
	RiAccountCircleLine,
	RiToggleLine,
} from "react-icons/ri";
import Heading from "../../UI/Heading/Heading";

const Header = () => {
	return (
		<header className="w-full px-28 grid grid-cols-12 py-4 bg-[#E8F3F3] text-[#333333] shadow">
			<div className="col-span-4 flex items-center gap-8 font-semibold">
				<Link to="/" className="flex gap-2 items-center">
					Home <RiArrowDownSFill className="inline" />
				</Link>
				<Link to="/blog">Blogs</Link>
				<Link to="/contact" className="flex gap-2 items-center">
					Contact <RiArrowDownSFill className="inline" />
				</Link>
			</div>
			<div className="col-span-4 text-center">
				<Heading group="text-4xl" firstEl="text-3xl" secondEl="text-xl">
					1020 Blog
				</Heading>
				<span className="bg-emerald-600 w-2 h-2 border rounded-full inline-block"></span>
			</div>
			<div className="col-span-4 flex items-center justify-end gap-8">
				<Link to="/">
					<RiSearchLine />
				</Link>
				<Link to="/">
					<RiAccountCircleLine />
				</Link>
				<Link to="/">
					<RiToggleLine />
				</Link>
			</div>
		</header>
	);
};

export default Header;
