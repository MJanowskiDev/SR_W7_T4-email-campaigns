import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, children }) => {
	if (!authenticated) {
		return <Navigate replace to='/authenticate' />;
	} else {
		return children;
	}
};

export default ProtectedRoute;
