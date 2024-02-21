import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {type TyumeSales, type TYumeSaleKey} from 'types';



export const getYearRange = async () => {
	const years = [];
	const salesDateKey: TYumeSaleKey = 'salesDate';
	const fields: TYumeSaleKey[] = [salesDateKey];
	try {
		const result = await kintoneClient
			.record
			.getRecords({
				app: config.appId,
				query: `order by ${salesDateKey} asc limit 1`,
				fields,
			});

		const [oldestRecord] = result.records as unknown as TyumeSales[];

		if (oldestRecord) {
			const thisYear = new Date().getFullYear();
			const oldestRecordYear = Number(oldestRecord[salesDateKey].value.slice(0, 4));
			
			for (let i = thisYear; i >= oldestRecordYear; i--) {
				years.push(i);
			}

		}

	} catch (err) {
		console.error(err);
	} 

	return years;
};