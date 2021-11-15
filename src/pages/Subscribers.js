import { UserTable } from 'components/Tables';
import { useEffect, useState } from 'react';
import { getAllSubscribers } from 'utils/api';
import { Spinner } from 'components/ui';
import { humanizeDate } from 'utils';

const Subscribers = () => {
	const [ allSubscribers, setAllSubscribers ] = useState([]);
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await getAllSubscribers();

			const dataFormatted = data.map((el) => {
				return { ...el, 'created-at': humanizeDate(el['created-at']) };
			});

			setAllSubscribers(dataFormatted);
			setFetchError(error);
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>All Subscribers</h1>
			{loading && <Spinner />}
			{fetchError && <p>Error while fetching data</p>}
			{!loading && !fetchError && <UserTable subscribers={allSubscribers} />}
		</div>
	);
};

export default Subscribers;
