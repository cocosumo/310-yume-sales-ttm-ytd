import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {type TYumeSaleKey, type TyumeSales} from 'types';

/**
 * Returns sales records between the given dates
 * 
 * @param param0
 * @param param0.start yyyy-mm-dd
 * @param param0.end yyyy-mm-dd
 * @returns Sales Records
 */
export const getSalesRecords = async ({
	start,
	end,
}: {
	start: string;
	end: string;
}) => {
  
	try {
		const dateKey: TYumeSaleKey = 'salesDate';
		const fields: TYumeSaleKey[] = [dateKey, 'saleAmount']; 

		const condition = [
			`${dateKey} >= "${start}"`,
			`${dateKey} <= "${end}"`,
		].join(' and ');

		const queryStr = `${condition} order by ${dateKey} asc limit 500 `;

		const result  = await kintoneClient.record.getRecords({
			app: config.appId,
			query: queryStr,
			fields,
		});

		const records  = result.records as unknown as TyumeSales[];
    
		return records;

	} catch (error) {
		console.log('error', JSON.stringify(error, null, 2));
		throw new Error('売上集計の取得に失敗しました。');
	}

};

