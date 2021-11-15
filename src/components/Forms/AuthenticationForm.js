import classes from './Form.module.css';
import PropTypes from 'prop-types';

const AuthenticationForm = ({ accesGranted }) => {
	const grantAccess = (user) => {
		accesGranted && accesGranted(user);
	};

	const formSubmitHandle = (e) => {
		e.preventDefault();

		const password = e.target.pswd.value;
		const user = e.target.user.value;

		const granted = password === 'test' ? user : null;

		grantAccess(granted);

		e.target.reset();
	};

	return (
		<form className={classes.Form} onSubmit={formSubmitHandle}>
			<input
				style={{ visibility: 'hidden', height: 0 }}
				id='user'
				type='text'
				autoComplete='username'
				defaultValue='root'
			/>
			<label htmlFor='password' />
			<input placeholder='Please enter password' id='pswd' type='password' autoComplete='new-password' />
			<input className={classes.Button} type='submit' value='Authenticate' />
		</form>
	);
};

AuthenticationForm.propTypes = {
	accesGranted: PropTypes.func.isRequired
};

export default AuthenticationForm;
