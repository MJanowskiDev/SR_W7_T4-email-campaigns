// const API_KEY = process.env.REACT_APP_API_KEY;

const url = 'https://api.emailjs.com/api/v1.0/email/send';

const serviceId = 'SR_W7_T4-CampaignerApp';
const templateId = 'template_urjnjva';
const userId = 'user_UEReVlJsOMvPS6IGlHfsk';
const token = 'fff05b342427f10ce0c2298c2cf4774e';

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
		method: 'POST', // or 'PUT'
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
