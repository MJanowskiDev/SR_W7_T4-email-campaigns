import { useRef } from 'react';
import { SubscriberForm } from 'components/Forms';
import { createSubscriber } from 'utils/api';

import { Create } from 'components/CRUD';

const AddSubscriber = () => {
	const createRef = useRef();

	const createNewSubscriber = async (formData) => {
		createRef.current.onCreateConfirm(formData, 'Creating Subscriber');
	};

	return (
		<div>
			<h1>Add new Subscriber</h1>
			<Create ref={createRef} createHandle={createSubscriber} redirectPath='/subscribers'>
				<SubscriberForm saveHandle={createNewSubscriber} />
			</Create>
		</div>
	);
};

export default AddSubscriber;
