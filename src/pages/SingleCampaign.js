import { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Delete, Patch } from 'components/CRUD';
import { CampaignForm } from 'components/Forms';
import { removeCampaign, patchCampaign } from 'utils/api-subscribers';
import { EmailsSender } from 'components/EmailsSender';

const SingleCampaign = () => {
	const { mode, id } = useParams();
	const { state } = useLocation();

	const patchRef = useRef();
	const emailsSenderRef = useRef();

	const updateCampaign = (data) => {
		patchRef.current.onPatchConfirm(id, data, 'Updating campaign');
	};

	const sendEmails = async (data) => {
		const result = await emailsSenderRef.current.send(data);
		if (!result.error) {
			patchRef.current.onPatchConfirm(id, { ...data, status: 'Sent' }, 'Sending emails');
		}
	};

	if (mode === 'edit') {
		return (
			<EmailsSender saveHandle={patchCampaign} ref={emailsSenderRef}>
				<Patch ref={patchRef} patchHandle={patchCampaign} redirectPath='/campaigns'>
					<CampaignForm
						saveAndSendHandle={sendEmails}
						saveHandle={updateCampaign}
						initialSubject={state.subject}
						initialContent={state.content}
					/>
				</Patch>
			</EmailsSender>
		);
	}

	if (mode === 'remove') {
		return <Delete name={state.subject} removeHandle={removeCampaign} id={id} removeCancelPath='/campaigns' />;
	}

	return (
		<div>
			<h1>Wrong path</h1>
		</div>
	);
};

export default SingleCampaign;
