import { Button } from 'components/ui';
import envelopeImg from 'assets/images/envelope.svg';
import classes from './Homepage.module.css';
const Homepage = () => {
	return (
		<div className={classes.Homepage}>
			<h1>Welcome to Campaigner App!</h1>
			<img height={200} src={envelopeImg} />
			<p>Service that provides convenient Email campaigns management.</p>

			<p>
				Would you like to <Button to='/add-campaign'>Start New Campaign</Button>?
			</p>
		</div>
	);
};

export default Homepage;
