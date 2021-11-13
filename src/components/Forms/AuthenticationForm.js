import classes from './Form.module.css';
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
			<div style={{ visibility: 'hidden', height: 0 }}>
				<label htmlFor='username' />
				<input id='user' type='text' autoComplete='username' defaultValue='root' />
			</div>

			<label htmlFor='password' />
			<input placeholder='Please enter password' id='pswd' type='password' autoComplete='new-password' />
			<input className={classes.Button} type='submit' value='Authenticate' />
		</form>
	);
};

export default AuthenticationForm;
