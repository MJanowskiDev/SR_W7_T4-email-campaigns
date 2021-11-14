import { useState } from 'react';
import { SubscriberForm } from 'components/Forms';
import { createSubscriber } from 'utils/api-subscribers';
import { Spinner, Button } from 'components/ui';

const AddSubscriber = () => {
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ response, setResponse ] = useState();

	const createNewSubscriber = async (formData) => {
		setLoading(true);
		const { data, error } = await createSubscriber(formData);
		setLoading(false);
		setResponse(data);
		setFetchError(error);
	};

	const confirmHandle = () => {
		setResponse(null);
	};

	return (
		<div>
			<h1>Add new Subscriber</h1>
			{loading && <Spinner />}
			{fetchError && <p>Sending failed</p>}
			{!response && !loading && !fetchError && <SubscriberForm saveHandle={createNewSubscriber} />}
			{response && (
				<div>
					<p>Successfully saved Subscriber</p>
					<Button onClick={confirmHandle}>OK</Button>
				</div>
			)}
		</div>
	);
};

export default AddSubscriber;
