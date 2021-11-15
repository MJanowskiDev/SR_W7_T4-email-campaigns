import { useForm } from 'react-hook-form';
import classes from './Form.module.css';
import PropTypes from 'prop-types';

const CampaignForm = ({ saveHandle, saveAndSendHandle, initialSubject, initialContent }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSaveOnly = handleSubmit((data, e) => {
		saveHandle && saveHandle(data);
	});

	const onSaveAndSend = handleSubmit(async (formData, e) => {
		saveAndSendHandle && saveAndSendHandle(formData);
	});

	return (
		<div>
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
				<input
					onClick={onSaveAndSend}
					className={classes.Button}
					type='submit'
					value='Send to all subscribers'
				/>
			</form>
		</div>
	);
};

CampaignForm.propTypes = {
	saveHandle: PropTypes.func.isRequired,
	saveAndSendHandle: PropTypes.func.isRequired,
	initialSubject: PropTypes.string,
	initialContent: PropTypes.string
};

export default CampaignForm;
