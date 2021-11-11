import Navigation from './Navigation';
const Layout = ({ authenticated, children }) => {
	return (
		<div>
			{authenticated && <Navigation />}
			<main style={{ margin: '0 auto', maxWidth: 1200, padding: 16 }}>{children}</main>
		</div>
	);
};

export default Layout;
