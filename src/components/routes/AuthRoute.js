import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({ authenticated, children }) => {
	if (authenticated) {
		return <Navigate replace to='/' />;
	} else {
		return children;
	}
};

AuthRoute.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired
};

export default AuthRoute;
