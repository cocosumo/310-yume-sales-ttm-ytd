import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {formatDate} from 'date-fns';
import {type TyumeSales, type TYumeSaleKey} from 'types';

export const saveSales = async ({
	year,
	month,
	newSalesAmount,
}: {
	year: number;
	month: number;
	newSalesAmount: number;
}) => {
	const keyField: TYumeSaleKey = 'salesDateKey';
	const parsedDate = new Date(year, month - 1, 1);
	const formattedDate = formatDate(parsedDate, 'yyyy-MM-dd'); 

	const updatedRecord: Partial<TyumeSales> = {
		saleAmount: {
			value: String(newSalesAmount),
		},
		salesDate: {
			value: formattedDate,
		},
	}; 

	const savedRecord = await kintoneClient.record.upsertRecord({
		app: config.appId,
		updateKey: {
			field: keyField,
			value: formattedDate,
		},
		
		record: updatedRecord,
	
	});

	return savedRecord;
};