import FeaturedPost from "../FeaturedPost/FeaturedPost";
import PopularPost from "../PopularPost/PopularPost";

const Landing = () => {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-8">
				<FeaturedPost />
			</div>
			<div className="col-span-4">
				<PopularPost />
			</div>
		</div>
	);
};

export default Landing;
