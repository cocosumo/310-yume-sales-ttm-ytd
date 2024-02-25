import {kintoneClient} from 'clients/kintoneClient';
import {config} from 'config/config';
import {getActualDateFromFiscalDate} from 'helpers/getActualDateFromFiscalDate';
import {type TyumeSales, type TYumeSaleKey} from 'types';

export const saveSales = async ({
	fiscalYear,
	month,
	newSalesAmount,
	storeUuid,
}: {
	fiscalYear: number;
	month: number;
	newSalesAmount: number | string;
	storeUuid: string;
}) => {
	const keyField: TYumeSaleKey = 'salesFieldKey';
	const formattedDate = getActualDateFromFiscalDate({
		fiscalYear,
		month,
	}); 
	const keyFieldValue = `${formattedDate}_${storeUuid}`;

	console.log('RECORD', fiscalYear, month);
	console.log('RECORD_SAVETO', formattedDate);


	const updatedRecord: Partial<TyumeSales> = {
		storeUuid: {
			value: storeUuid,
		},
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
			value: keyFieldValue,
		},
		
		record: updatedRecord,
	
	});

	return savedRecord;
};