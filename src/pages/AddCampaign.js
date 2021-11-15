import { useRef } from 'react';
import { CampaignForm } from 'components/Forms';
import { createCampaign } from 'utils/api-subscribers';

import { Create } from 'components/CRUD';
import { EmailsSender } from 'components/EmailsSender';

const AddCampaign = () => {
	const createRef = useRef();
	const emailsSenderRef = useRef();

	const saveCampaign = async (formData) => {
		createRef.current.onCreateConfirm({ ...formData, status: 'Draft' }, 'Creating Campaign');
	};

	const sendCampaign = async (formData) => {
		const result = await emailsSenderRef.current.send(formData);
		if (!result.error) {
			createRef.current.onCreateConfirm({ ...formData, status: 'Sent' }, 'Sending emails ');
		}
	};

	return (
		<div>
			<h1>Create new Campaign</h1>
			<EmailsSender saveHandle={createCampaign} ref={emailsSenderRef}>
				<Create ref={createRef} createHandle={createCampaign} redirectPath='/campaigns'>
					<CampaignForm saveAndSendHandle={sendCampaign} saveHandle={saveCampaign} />
				</Create>
			</EmailsSender>
		</div>
	);
};

export default AddCampaign;
