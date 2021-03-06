import { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Button } from 'components/ui';

const Patch = ({ patchHandle, redirectPath, children }, ref) => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState();
	const [ error, setError ] = useState();
	const [ operation, setOperation ] = useState('Request');

	useImperativeHandle(
		ref,
		() => ({
			async onPatchConfirm(id, state, operation) {
				setOperation(operation);
				if (patchHandle) {
					setLoading(true);
					const { data, error } = await patchHandle(id, state);
					setLoading(false);
					setData(data);
					setError(error);
				}
			}
		}),
		[ patchHandle ]
	);

	const onRedirect = () => {
		navigate(redirectPath);
	};

	const errorComponent = (
		<div>
			<p>{operation} finished with error! </p>
			<Button onClick={onRedirect}>Ok</Button>
		</div>
	);

	const successComponent = (
		<div>
			<p>{operation} completed successfully</p>
			<Button onClick={onRedirect}>Ok</Button>
		</div>
	);

	return (
		<div>
			{!loading && !error && !data && children}
			{loading && <Spinner />}
			{error && errorComponent}
			{data && successComponent}
		</div>
	);
};

export default forwardRef(Patch);
