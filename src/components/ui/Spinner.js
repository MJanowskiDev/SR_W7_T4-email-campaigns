import Loader from 'react-loader-spinner';

const Spinner = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Loader type='RevolvingDot' color='#00BFFF' height={100} width={100} />
			<p>Loading...</p>
		</div>
	);
};

export default Spinner;
