import React from 'react';
import classes from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className={classes.NotFound}>
			<div className={classes.Content}>
				<p>
					<strong>404</strong>
				</p>
				<hr />
				<p>Page not found</p>
			</div>
			<br />
			<Link to='/'>Homepage</Link>
		</div>
	);
};

export default NotFound;
