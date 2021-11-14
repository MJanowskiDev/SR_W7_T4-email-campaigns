import { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'components/ui';

const Patch = ({ patchHandle, redirectPath, children }, ref) => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState();
	const [ error, setError ] = useState();

	useImperativeHandle(
		ref,
		() => ({
			async onPatchConfirm(id, state) {
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
			<p>Error occured while updating entry.</p>
			<button onClick={onRedirect}>Ok</button>
		</div>
	);

	const successComponent = (
		<div>
			<p>Successfully updated entry.</p>
			<button onClick={onRedirect}>Ok</button>
		</div>
	);
	console.log(data);
	return (
		<div>
			<h1>Updating...</h1>
			{!loading && !error && !data && children}
			{loading && <Spinner />}
			{error && errorComponent}
			{data && data.length > 0 && successComponent}
		</div>
	);
};

export default forwardRef(Patch);