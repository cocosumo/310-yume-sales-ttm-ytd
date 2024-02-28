import {getFiscalYear} from 'helpers/getFiscalYear';
import {useSalesRecords} from './useSalesRecords';
import {useCallback} from 'react';
import {useStoreUuidByRecId} from './useStoreUuidByRecId';


export type ParsedMonthRecord = Record<number, number>;

export type ParsedYearRecData = {
	data: ParsedMonthRecord;
	total: number;
};

export type ParsedSalesRecords = Record<number, ParsedYearRecData>;


export const useParsedSalesRecords = ({
	store,
}: {	
	store: string;
}) => {

	const {data: storeUuid} = useStoreUuidByRecId({
		store,
	});
	
	return useSalesRecords<ParsedSalesRecords>({
		select: useCallback((data) => data
			.reduce<ParsedSalesRecords>((acc, cur) => {
			
			if (storeUuid && cur.storeUuid.value !== storeUuid) return acc; 

			const [year, month] = cur.salesDate.value.split('-').map(Number);
		
			const fiscalYear = getFiscalYear(new Date(year, month - 1, 1));
	
			const amount = Number(cur.saleAmount.value);

			acc[fiscalYear] ||= {
				data: {

				},
				total: 0,
			};

			acc[fiscalYear].data[month] = Number(acc[fiscalYear].data[month] ?? 0) + amount;
			acc[fiscalYear].total += Number(amount);

			return acc;
		}, {}), [storeUuid]),
	});
};