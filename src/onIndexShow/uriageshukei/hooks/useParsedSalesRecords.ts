import {getFiscalYear} from 'helpers/getFiscalYear';
import {useSalesRecords} from './useSalesRecords';
import {useCallback} from 'react';


export type ParsedMonthRecord = Record<number, number | ''>;

export type ParsedYearRecData = {
	data: ParsedMonthRecord;
	total: number;
};

export type ParsedSalesRecords = Record<number, ParsedYearRecData>;


export const useParsedSalesRecords = () => useSalesRecords<ParsedSalesRecords>({
	select: useCallback((data) => data
		.reduce<ParsedSalesRecords>((acc, cur) => {
		const [year, month] = cur.salesDate.value.split('-').map(Number);
		
		const fiscalYear = getFiscalYear(new Date(year, month - 1, 1));
	
		const amount = cur.saleAmount.value ? Number(cur.saleAmount.value) : '';

		acc[fiscalYear] ||= {
			data: {},
			total: 0,
		};

		acc[fiscalYear].data[month] = amount;
		acc[fiscalYear].total += Number(amount);

		return acc;
	}, {}), []),
});