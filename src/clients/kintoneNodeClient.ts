import {KintoneRestAPIClient} from '@kintone/rest-api-client';

export const kintoneClient = new KintoneRestAPIClient({
	// Use password authentication
	baseUrl: process?.env.KINTONE_BASE_URL,
	auth: {
		apiToken: [
			process.env.KINTONE_API_TOKEN,
			process.env.KINTONE_API_TOKEN_STORES,
			process.env.KINTONE_API_TOKEN_SETTINGS,
		],
	},
});

