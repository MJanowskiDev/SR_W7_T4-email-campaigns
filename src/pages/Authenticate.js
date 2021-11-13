import { AuthenticationForm } from 'components/Forms';
import classes from './Authenticate.module.css';
const Authenticate = ({ onAuthenticated }) => {
	const accesGranted = (user) => {
		onAuthenticated && onAuthenticated(user);
	};

	return (
		<div className={classes.Authenticate}>
			<h1>Welcome to Campaigner App</h1>
			<p>This App requires Authentication</p>
			<AuthenticationForm accesGranted={accesGranted} />
		</div>
	);
};

export default Authenticate;
