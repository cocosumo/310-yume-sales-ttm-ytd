import {type KintoneRestAPIClient} from '@kintone/rest-api-client';

let kintoneClient: KintoneRestAPIClient;


(async () => {

	if (typeof window === 'undefined') {
		const module = await import('./kintoneNodeClient');
		kintoneClient = module.kintoneClient;
	} else {

		const module = await import('./kintoneBrowserClient');
		kintoneClient = module.kintoneClient;
	}

})();

export {kintoneClient};