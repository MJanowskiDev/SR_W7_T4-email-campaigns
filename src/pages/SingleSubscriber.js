import { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { SubscriberForm } from 'components/Forms';
import { removeSubscriber, patchSubscriber } from 'utils/api-subscribers';

import { Delete, Patch } from 'components/CRUD';

const SingleSubscriber = () => {
	const { mode, id } = useParams();
	const { state } = useLocation();

	const patchRef = useRef();

	const updateSubscriber = (data) => {
		patchRef.current.onPatchConfirm(id, data);
	};

	if (mode === 'edit') {
		return (
			<Patch ref={patchRef} patchHandle={patchSubscriber} redirectPath='/subscribers'>
				<SubscriberForm saveHandle={updateSubscriber} initialEmail={state.email} initialName={state.name} />
			</Patch>
		);
	}

	if (mode === 'remove') {
		return <Delete name={state.name} removeHandle={removeSubscriber} id={id} removeCancelPath='/subscribers' />;
	}

	return (
		<div>
			<h1>Wrong path</h1>
		</div>
	);
};

export default SingleSubscriber;
