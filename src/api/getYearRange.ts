import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {type TyumeSales, type YumeSaleKey} from 'types';



export const getYearRange = async () => {
	const thisYear = new Date().getFullYear();
	const years = [thisYear];
	const salesDateKey: YumeSaleKey = 'salesDate';
	const fields: YumeSaleKey[] = [salesDateKey];
	try {
		const result = await kintoneClient
			.record
			.getRecords({
				app: config.appId,
				query: `order by ${salesDateKey} asc limit 1`,
				fields,
			});

		const [oldestRecord] = result.records as unknown as TyumeSales;

		if (oldestRecord) {
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