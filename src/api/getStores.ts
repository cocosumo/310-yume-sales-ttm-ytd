import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {type TStores, type TStoreKey} from 'types';

export const getStores = async () => {
	const orderByKey: TStoreKey = 'sortNumber'; 
	const fields: TStoreKey[] = [
		'$id',
		'uuid',
		'sortNumber',
		'storeNameShort',
	];

	try {
		const result = await kintoneClient.record.getRecords({
			app: config.storeAppId,
			query: `${orderByKey} != 0 order by ${orderByKey} desc limit 500`,
			fields,
		});

		const records = result.records as unknown as TStores[];

		return records;

	} catch (error) {
		console.error(error);
		return [];
	}
};