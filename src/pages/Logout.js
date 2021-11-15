import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Logout = ({ logoutHandle }) => {
	useEffect(
		() => {
			logoutHandle && logoutHandle();
		},
		[ logoutHandle ]
	);

	return <div />;
};

Logout.propTypes = {
	logoutHandle: PropTypes.func.isRequired
};

export default Logout;
