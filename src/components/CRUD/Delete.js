import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'components/ui';

const Delete = ({ name, removeHandle, id, removeCancelPath }) => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState();
	const [ error, setError ] = useState();
	const onRemoveConfirm = async () => {
		if (removeHandle) {
			setLoading(true);
			const { data, error } = await removeHandle(id);
			setLoading(false);
			setData(data);
			setError(error);
		}
	};

	const onRedirect = () => {
		navigate(removeCancelPath);
	};

	const removeQuestionComponent = (
		<div>
			<p>
				Do You want to permanently remove <strong>{name}</strong>
			</p>
			<div>
				<button onClick={onRemoveConfirm}>Yes</button>
				<button onClick={onRedirect}>No</button>
			</div>
		</div>
	);

	const errorComponent = (
		<div>
			<p>
				Error occured while removing <strong>{name}</strong>
			</p>
			<button onClick={onRedirect}>Ok</button>
		</div>
	);

	const successComponent = (
		<div>
			<p>
				Successfully removed <strong>{name}</strong>
			</p>
			<button onClick={onRedirect}>Ok</button>
		</div>
	);

	return (
		<div>
			<h1>Removing...</h1>
			{!loading && !error && !data && removeQuestionComponent}
			{loading && <Spinner />}
			{error && errorComponent}
			{data && data.deleted && successComponent}
		</div>
	);
};

export default Delete;
