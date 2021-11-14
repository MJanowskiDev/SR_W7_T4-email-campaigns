const API_KEY = process.env.REACT_APP_API_KEY;

const subscribersBaseUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers?api_key=${API_KEY}`;
const campaignsBaseUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/campaigns?api_key=${API_KEY}`;

const create = (url, data) => {
	return fetch(url, {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`
		},
		body: JSON.stringify({ fields: data })
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.error);

			return { data: res, error: false };
		})
		.catch((error) => {
			return { data: [], error: error };
		});
};

const patch = (url, id, data) => {
	return fetch(url, {
		method: 'PATCH', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`
		},
		body: JSON.stringify({ records: [ { id: id, fields: data } ] })
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.error);

			return { data: res, error: false };
		})
		.catch((error) => {
			return { data: [], error: error };
		});
};

const remove = (url, id) => {
	return fetch(url, {
		method: 'DELETE'
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.error);

			return { data: res, error: false };
		})
		.catch((error) => {
			return { data: [], error: error };
		});
};

const getAll = (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.error);
			const fieldsArray = res.records.map((el) => el.fields);
			return { data: fieldsArray, error: false };
		})
		.catch((error) => {
			return { data: [], error: error };
		});
};

export const createSubscriber = (data) => {
	return create(subscribersBaseUrl, data);
};

export const createCampaign = (data) => {
	return create(campaignsBaseUrl, data);
};

export const getAllSubscribers = () => {
	return getAll(subscribersBaseUrl);
};

export const getAllCampaigns = () => {
	return getAll(campaignsBaseUrl);
};

export const removeSubscriber = (id) => {
	const url = `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers/${id}?api_key=${API_KEY}`;
	return remove(url, id);
};

export const removeCampaign = (id) => {
	const url = `https://api.airtable.com/v0/appFfCocKXEnFjab8/campaigns/${id}?api_key=${API_KEY}`;
	return remove(url, id);
};

export const patchSubscriber = (id, data) => {
	return patch(subscribersBaseUrl, id, data);
};

export const patchCampaign = (id, data) => {
	return patch(campaignsBaseUrl, id, data);
};

export const getRecipientEmails = async () => {
	const emailsUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers?api_key=${API_KEY}&fields%5B%5D=email`;
	const res = await getAll(emailsUrl);

	const emailsArray = res.data.map((field) => field.email);

	return { data: emailsArray, error: res.error };
};
