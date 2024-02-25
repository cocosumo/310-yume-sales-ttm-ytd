import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {getFiscalYear} from 'helpers/getFiscalYear';
import {type TyumeSales, type TYumeSaleKey} from 'types';


/**
 * Get year range from the oldest record to the current year
 * Use to populate the year select input
 */
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

		const thisYear = getFiscalYear();
		const oldestRecordYear = oldestRecord 
			? Number(oldestRecord[salesDateKey].value.slice(0, 4))
			: thisYear;


		for (let i = thisYear; i >= oldestRecordYear; i--) {
			years.push(i);
		}


	} catch (err) {
		console.error(err);
	} 

	return years;
};