import Heading from "../../UI/Heading/Heading";
import PostList from "../PostList/PostList";

function FeaturedPost() {
	return (
		<div className="">
			<Heading group="text-xl mb-12">Featured Post</Heading>
			<PostList />
		</div>
	);
}

export default FeaturedPost;
