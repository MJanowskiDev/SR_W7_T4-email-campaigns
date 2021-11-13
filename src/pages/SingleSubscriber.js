import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { SubscriberForm } from 'components/Forms';
const SingleSubscriber = () => {
	const { mode, id } = useParams();
	const { state } = useLocation();
	const navigate = useNavigate();

	const updateSubscriber = (data) => {
		console.log('Update', data);
	};

	const removeSubscriber = (id) => {
		console.log('Remove', id);
	};

	const onRemovalCancel = () => {
		navigate('/subscribers');
	};

	if (mode === 'edit') {
		return (
			<div>
				<h1>Edit mode</h1>
				<SubscriberForm saveHandle={updateSubscriber} initialEmail={state.email} initialName={state.name} />
			</div>
		);
	}

	if (mode === 'remove') {
		return (
			<div>
				<h1>Remove mode</h1>
				<p>
					Do You want permanently remove <strong>{state.name}</strong>
				</p>

				<div>
					<button onClick={() => removeSubscriber(state.id)}>Yes</button>
					<button onClick={onRemovalCancel}>No</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1>Wrong path</h1>
		</div>
	);
};

export default SingleSubscriber;
