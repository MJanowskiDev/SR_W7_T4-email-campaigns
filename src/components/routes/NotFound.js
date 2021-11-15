import classes from './NotFound.module.css';
import { Button } from 'components/ui';

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
			<Button to='/'>Homepage</Button>
		</div>
	);
};

export default NotFound;
