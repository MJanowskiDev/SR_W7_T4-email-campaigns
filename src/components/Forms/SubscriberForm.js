import { useForm } from 'react-hook-form';
import classes from './Form.module.css';
import PropTypes from 'prop-types';

const SubscriberForm = ({ saveHandle, initialName, initialEmail }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		saveHandle && saveHandle(data);
	};
	return (
		<form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
			<input
				defaultValue={initialName}
				type='text'
				placeholder='Name'
				{...register('name', { required: true, maxLength: 80 })}
			/>
			{errors.name && <span className={classes.Error}>This field is required!</span>}

			<input
				defaultValue={initialEmail}
				type='text'
				placeholder='Email'
				{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
			/>
			{errors.email &&
			errors.email.type === 'required' && <span className={classes.Error}>This field is required!</span>}
			{errors.email &&
			errors.email.type === 'pattern' && <span className={classes.Error}>Invalid email address format</span>}

			<input className={classes.Button} type='submit' />
		</form>
	);
};

SubscriberForm.propTypes = {
	saveHandle: PropTypes.func.isRequired,
	initialName: PropTypes.string,
	initialEmail: PropTypes.string
};

export default SubscriberForm;
