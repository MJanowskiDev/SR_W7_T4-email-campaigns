import { forwardRef, useImperativeHandle, useState } from 'react';

import { sendEmails } from 'utils/api-emailjs';
import { getRecipients } from 'utils/api-subscribers';

import { Spinner, Button } from 'components/ui';

const EmailsSender = ({ children }, ref) => {
	const [ fetchError, setFetchError ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ response, setResponse ] = useState();

	useImperativeHandle(
		ref,
		() => ({
			async send(formData) {
				const response = await getRecipients();
				let data, error;
				if (!response.error && response.data) {
					response.data.forEach(async (subscriber) => {
						const res = await sendEmails(
							formData.subject.replace('{{name}}', subscriber.name),
							formData.content.replace('{{name}}', subscriber.name),
							subscriber.email
						);

						data = res.data;
						error = res.error;
					});

					setLoading(false);
					setResponse(data);
					setFetchError(error);
				}
				return { error: error || response.error };
			}
		}),
		[]
	);

	return (
		<div>
			{loading && <Spinner />}
			{fetchError && <p>Sending emails failed</p>}
			{!loading && !fetchError && !response && children}
			{response && (
				<div>
					<p>Successfully sent campaign emails</p>
					<Button to='/campaigns'>OK</Button>
				</div>
			)}
		</div>
	);
};

export default forwardRef(EmailsSender);
