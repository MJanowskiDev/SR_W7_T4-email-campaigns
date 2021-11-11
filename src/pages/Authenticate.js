import AuthenticationForm from 'components/AuthenticationForm';
const Authenticate = ({ onAuthenticated }) => {
	const accesGranted = (user) => {
		onAuthenticated && onAuthenticated(user);
	};

	return (
		<div>
			<h1>This is Authenticate page</h1>
			<AuthenticationForm accesGranted={accesGranted} />
		</div>
	);
};

export default Authenticate;
