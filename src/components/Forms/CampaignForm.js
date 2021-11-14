import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Form.module.css';
import { sendEmails } from 'utils/api-emailjs';
import { getRecipientEmails } from 'utils/api-subscribers';
import { Spinner, Button } from 'components/ui';
const SubscriberForm = ({ saveHandle, saveAndSendHandle, initialSubject, initialContent }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ response, setResponse ] = useState();

	const onSaveOnly = handleSubmit((data, e) => {
		saveHandle && saveHandle(data);
	});

	const onSaveAndSend = handleSubmit(async (formData, e) => {
		setLoading(true);
		const response = await getRecipientEmails();
		if (!response.error && response.data && response.data.length > 0) {
			const emails = response.data && response.data.join(',');

			const { data, error } = await sendEmails(formData.subject, formData.content, emails);

			setLoading(false);
			setResponse(data);
			setFetchError(error);

			if (!error) {
				saveAndSendHandle && saveAndSendHandle({ ...formData, status: 'Sent' });
			}
		}
	});

	const formComponent = (
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
			<input onClick={onSaveAndSend} className={classes.Button} type='submit' value='Send to all subscribers' />
		</form>
	);

	return (
		<div>
			{loading && <Spinner />}
			{fetchError && <p>Sending emails failed</p>}
			{response && (
				<div>
					<p>Successfully sent campaign emails</p>
					<Button to='/campaigns'>OK</Button>
				</div>
			)}
			{formComponent}
		</div>
	);
};

export default SubscriberForm;
