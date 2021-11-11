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
		<form onSubmit={formSubmitHandle}>
			<div style={{ visibility: 'hidden' }}>
				<label htmlFor='username' />
				<input id='user' type='text' autoComplete='username' defaultValue='root' />
			</div>

			<label htmlFor='password' />
			<input id='pswd' type='password' autoComplete='new-password' />
			<input type='submit' value='Authenticate' />
		</form>
	);
};

export default AuthenticationForm;
