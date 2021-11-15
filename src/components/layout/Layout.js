import Navigation from './Navigation';
import classes from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ authenticated, children }) => {
	return (
		<div>
			{authenticated && <Navigation />}
			<main className={classes.Main}>{children}</main>
		</div>
	);
};

Layout.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired
};

export default Layout;
