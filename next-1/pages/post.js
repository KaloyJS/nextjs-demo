import axios from 'axios';

const Comment = ({ email, body }) => (
	<div>
		<h5>{email}</h5>
		<p>{body}</p>
	</div>
);

const Post = ({ id, comments }) => {
	return (
		<div>
			<h1>Comments for Post #{id}</h1>
			{comments.map((c) => (
				<Comment {...c} key={c.id} />
			))}
		</div>
	);
};

Post.getInitialProps = async ({ query }) => {
	const url = `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`;
	const res = await axios.get(url);
	const { data } = res;
	return { ...query, comments: data };
};

export default Post;
