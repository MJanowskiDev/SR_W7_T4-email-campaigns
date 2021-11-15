import envelopeImg from 'assets/images/envelope.svg';
import classes from './Homepage.module.css';
const Homepage = () => {
	return (
		<div className={classes.Homepage}>
			<h1>Welcome to Campaigner App!</h1>
			<img width={450} height={200} alt='CampaignApp envelope' src={envelopeImg} />
			<p>Service that provides convenient Email campaigns management.</p>
		</div>
	);
};

export default Homepage;
