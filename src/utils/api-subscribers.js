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
