import { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Delete, Patch } from 'components/CRUD';
import { CampaignForm } from 'components/Forms';
import { removeCampaign, patchCampaign } from 'utils/api-subscribers';

const SingleCampaign = () => {
	const { mode, id } = useParams();
	const { state } = useLocation();

	const patchRef = useRef();

	const updateCampaign = (data) => {
		patchRef.current.onPatchConfirm(id, data);
	};

	const sendEmails = () => {
		console.log('Send emails');
	};

	if (mode === 'edit') {
		return (
			<div>
				<Patch ref={patchRef} patchHandle={patchCampaign} redirectPath='/campaigns'>
					<CampaignForm
						saveAndSendHandle={sendEmails}
						saveHandle={updateCampaign}
						initialSubject={state.subject}
						initialContent={state.content}
					/>
				</Patch>
			</div>
		);
	}

	if (mode === 'remove') {
		return <Delete name={state.name} removeHandle={removeCampaign} id={id} removeCancelPath='/campaigns' />;
	}

	return (
		<div>
			<h1>Wrong path</h1>
		</div>
	);
};

export default SingleCampaign;
