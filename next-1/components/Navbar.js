import Link from 'next/Link';
const NavBar = () => {
	const styles = {
		display: 'flex',
		background: 'grey',
		justifyContent: 'space-between',
		padding: '1rem',
		margin: '0',
		width: '100%',
	};
	return (
		<div style={styles}>
			<Link href='/'>
				<a>Home Page</a>
			</Link>
			<Link href='/about'>
				<a>About Page</a>
			</Link>
			<Link href='/contact'>
				<a>Contact Page</a>
			</Link>
		</div>
	);
};

export default NavBar;
