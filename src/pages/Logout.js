import { useEffect } from 'react';
const Logout = ({ logoutHandle }) => {
	useEffect(() => {
		logoutHandle && logoutHandle();
	}, []);

	return <div />;
};

export default Logout;
