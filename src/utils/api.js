const API_KEY = process.env.REACT_APP_API_KEY;

const subscribersBaseUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers?api_key=${API_KEY}`;
const campaignsBaseUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/campaigns?api_key=${API_KEY}`;

const getRemoveSubscriberUrl = (id) => {
	return `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers/${id}?api_key=${API_KEY}`;
};
const getRemoveCampaignUrl = (id) => {
	return `https://api.airtable.com/v0/appFfCocKXEnFjab8/campaigns/${id}?api_key=${API_KEY}`;
};

const allRecipientsUrl = `https://api.airtable.com/v0/appFfCocKXEnFjab8/subscribers?api_key=${API_KEY}&fields%5B%5D=email&fields%5B%5D=name`;

const create = (url, data) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
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
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
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
	const url = getRemoveSubscriberUrl(id);
	return remove(url, id);
};

export const removeCampaign = (id) => {
	const url = getRemoveCampaignUrl(id);
	return remove(url, id);
};

export const patchSubscriber = (id, data) => {
	return patch(subscribersBaseUrl, id, data);
};

export const patchCampaign = (id, data) => {
	return patch(campaignsBaseUrl, id, data);
};

export const getRecipients = async () => {
	const recipientsUrl = allRecipientsUrl;
	const res = await getAll(recipientsUrl);
	return { data: res.data, error: res.error };
};
