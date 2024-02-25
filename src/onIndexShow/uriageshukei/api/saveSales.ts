import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {getActualDateFromFiscalDate} from 'helpers/getActualDateFromFiscalDate';
import {type TyumeSales, type TYumeSaleKey} from 'types';

export const saveSales = async ({
	fiscalYear,
	month,
	newSalesAmount,
}: {
	fiscalYear: number;
	month: number;
	newSalesAmount: number | string;
}) => {
	const keyField: TYumeSaleKey = 'salesDateKey';
	const formattedDate = getActualDateFromFiscalDate({
		fiscalYear,
		month,
	}); 

	console.log('RECORD', fiscalYear, month);
	console.log('RECORD_SAVETO', formattedDate);


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