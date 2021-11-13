import { useForm } from 'react-hook-form';
import classes from './Form.module.css';

const SubscriberForm = ({ saveHandle }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		saveHandle && saveHandle(data);
	};
	return (
		<form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
			<input type='text' placeholder='Name' {...register('name', { required: true, maxLength: 80 })} />
			{errors.name && <span className={classes.Error}>This field is required!</span>}

			<input type='text' placeholder='Email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
			{errors.email &&
			errors.email.type === 'required' && <span className={classes.Error}>This field is required!</span>}
			{errors.email &&
			errors.email.type === 'pattern' && <span className={classes.Error}>Invalid email address format</span>}

			<input className={classes.Button} type='submit' />
		</form>
	);
};

export default SubscriberForm;
