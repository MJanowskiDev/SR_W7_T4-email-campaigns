import { useState } from 'react';
import { CampaignForm } from 'components/Forms';
import { createCampaign } from 'utils/api-subscribers';
import { Spinner } from 'components/ui';
import { sendEmails } from 'utils/api-emailjs';

const AddCampaign = () => {
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ response, setResponse ] = useState();

	const createNewSubscriber = async (formData) => {
		setLoading(true);
		const { data, error } = await createCampaign({ ...formData, status: 'Draft' });
		setLoading(false);
		setResponse(data);
		setFetchError(error);
	};

	const saveAndSendHandle = async (formData) => {
		setLoading(true);
		console.log('here');
		const { data, error } = await createCampaign({ ...formData, status: 'Sent' });
		setLoading(false);
		setResponse(data);
		setFetchError(error);
	};

	const confirmHandle = () => {
		setResponse(null);
	};

	return (
		<div>
			<h1>Add new Campaign </h1>
			{loading && <Spinner />}
			{fetchError && <p>Sending failed</p>}
			{!response &&
			!loading &&
			!fetchError && <CampaignForm saveAndSendHandle={saveAndSendHandle} saveHandle={createNewSubscriber} />}
			{response && (
				<div>
					<p>Successfully saved campaign</p>
					<button onClick={confirmHandle}>OK</button>
				</div>
			)}
		</div>
	);
};

export default AddCampaign;
