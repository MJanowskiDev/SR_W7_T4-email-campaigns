import { UserTable } from 'components/Tables';
import { useEffect, useState } from 'react';
import { getAllSubscribers } from 'utils/api-subscribers';
import { Spinner } from 'components/ui';

const Subscribers = () => {
	const [ allSubscribers, setAllSubscribers ] = useState([]);
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await getAllSubscribers();
			setAllSubscribers(data);
			setFetchError(error);
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>This is Subscribers page</h1>
			{loading && <Spinner />}
			{fetchError && <p>Error while fetching data</p>}
			{!loading && !fetchError && <UserTable subscribers={allSubscribers} />}
		</div>
	);
};

export default Subscribers;
