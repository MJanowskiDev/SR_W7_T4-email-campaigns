import Navigation from './Navigation';
import classes from './Layout.module.css';
const Layout = ({ authenticated, children }) => {
	return (
		<div>
			{authenticated && <Navigation />}
			<main className={classes.Main}>{children}</main>
		</div>
	);
};

export default Layout;
