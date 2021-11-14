import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<header className={classes.header}>
			<Link to='/'>
				<Logo />
			</Link>
			<nav>
				<ul>
					<li className={pathname === '/add-subscriber' ? classes.linkActive : classes.linkInactive}>
						<Link to='/add-subscriber'>Add Subscriber</Link>
					</li>
					<li className={pathname === '/subscribers' ? classes.linkActive : classes.linkInactive}>
						<Link to='/subscribers'>Subscribers</Link>
					</li>
					<li className={pathname === '/add-campaign' ? classes.linkActive : classes.linkInactive}>
						<Link to='/add-campaign'>New Campaign</Link>
					</li>

					<li className={pathname === '/campaigns' ? classes.linkActive : classes.linkInactive}>
						<Link to='/campaigns'>Campaigns</Link>
					</li>

					<li className={`${classes.linkInactive} ${classes.linkLogout}`}>
						<Link to='/logout'>Logout</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
