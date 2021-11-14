import { useForm } from 'react-hook-form';
import classes from './Form.module.css';

const SubscriberForm = ({ saveHandle, saveAndSendHandle, initialSubject, initialContent }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSaveOnly = handleSubmit((data, e) => {
		saveHandle && saveHandle(data);
	});

	const onSaveAndSend = handleSubmit((data, e) => {
		saveAndSendHandle && saveAndSendHandle(data);
	});

	return (
		<form className={classes.Form}>
			<input
				defaultValue={initialSubject}
				type='text'
				placeholder='Subject'
				{...register('subject', { required: true })}
			/>
			{errors.subject && <span className={classes.Error}>This field is required!</span>}

			<textarea
				defaultValue={initialContent}
				rows={5}
				type='text'
				placeholder='Content'
				{...register('content', { required: true })}
			/>
			{errors.content && <span className={classes.Error}>This field is required!</span>}

			<input onClick={onSaveOnly} className={classes.Button} type='submit' value='Save only' />
			<input onClick={onSaveAndSend} className={classes.Button} type='submit' value='Save and Send' />
		</form>
	);
};

export default SubscriberForm;
