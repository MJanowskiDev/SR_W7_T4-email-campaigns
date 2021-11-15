import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Button } from 'components/ui';
import PropTypes from 'prop-types';

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
				<Button onClick={onRemoveConfirm}>Yes</Button>
				<Button onClick={onRedirect}>No</Button>
			</div>
		</div>
	);

	const errorComponent = (
		<div>
			<p>
				Error occured while removing <strong>{name}</strong>
			</p>
			<Button onClick={onRedirect}>Ok</Button>
		</div>
	);

	const successComponent = (
		<div>
			<p>
				Successfully removed <strong>{name}</strong>
			</p>
			<Button onClick={onRedirect}>Ok</Button>
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

Delete.propTypes = {
	name: PropTypes.string.isRequired,
	removeHandle: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	removeCancelPath: PropTypes.string.isRequired
};

export default Delete;
