import React from 'react';
import axios from 'axios';
import Link from 'next/Link';

const Index = ({ posts }) => {
	console.log(posts);
	return (
		<div>
			<h1>Home page</h1>
			<ul>
				{posts.map((p) => (
					<li key={p.id}>
						<Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
							<a>{p.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

Index.getInitialProps = async (ctx) => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const { data } = res;
	return { posts: data };
};

export default Index;
