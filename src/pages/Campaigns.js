import { CampaignTable } from 'components/Tables';
import { useEffect, useState } from 'react';
import { getAllCampaigns } from 'utils/api-subscribers';
import { Spinner } from 'components/ui';
import { humanizeDate } from 'utils';

const Campaigns = () => {
	const [ allCampaigns, setAllCampaigns ] = useState([]);
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await getAllCampaigns();
			const dataFormatted = data.map((el) => {
				return { ...el, 'created-at': humanizeDate(el['created-at']) };
			});
			setAllCampaigns(dataFormatted);
			setFetchError(error);
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>All Campaigns</h1>
			{fetchError && <p>Error while fetching data</p>}
			{loading && <Spinner />}
			{!loading && !fetchError && <CampaignTable campaigns={allCampaigns} />}
		</div>
	);
};

export default Campaigns;
