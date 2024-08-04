import Author from "../Author/Author";
import Tag from "../Tag/Tag";

const PostCard = () => {
	return (
		<div className="col-span-2">
			<Tag disabled={true}>Travel</Tag>
			<h1 className="text-3xl font-bold capitalize mt-2">
				set video playback speed with javascript
			</h1>
			<img
				src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				className="w-full h-auto object-cover rounded-md mt-4"
			/>
			<Author
				image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				name="John Doe"
				date="2 days ago"
				time="4 min read"
			/>
		</div>
	);
};

export default PostCard;
