import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ authenticated, children }) => {
	if (!authenticated) {
		return <Navigate replace to='/authenticate' />;
	} else {
		return children;
	}
};

ProtectedRoute.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired
};

export default ProtectedRoute;
