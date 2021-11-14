const url = 'https://api.emailjs.com/api/v1.0/email/send';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const token = process.env.REACT_APP_EMAILJS_TOKEN;

export const sendEmails = (subject, content, email) => {
	var data = {
		service_id: serviceId,
		template_id: templateId,
		user_id: userId,
		accessToken: token,
		template_params: {
			title: subject,
			content: content,
			email: email
		}
	};

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then((res) => {
			if (res.error) throw new Error(res.error);

			return { data: res, error: false };
		})
		.catch((error) => {
			return { data: [], error: error };
		});
};
