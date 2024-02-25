import {getFiscalYear} from 'helpers/getFiscalYear';
import {useSalesRecords} from './useSalesRecords';


export type ParsedMonthRecord = Record<number, number | ''>;

export type ParsedYearRecData = {
	data: ParsedMonthRecord;
	total: number;
};

export type ParsedSalesRecords = Record<number, ParsedYearRecData>;


export const useParsedSalesRecords = () => useSalesRecords<ParsedSalesRecords>({
	select: (data) => data
		.reduce<ParsedSalesRecords>((acc, cur) => {
		const [year, month] = cur.salesDate.value.split('-').map(Number);
		
		const fiscalYear = getFiscalYear(new Date(year, month - 1, 1));
		

		const amount = cur.saleAmount.value ? Number(cur.saleAmount.value) : '';

		if (amount === 113340) {
			console.log('FISCAL_YEAR', cur.salesDate.value, fiscalYear, month, amount);
		}

		acc[fiscalYear] ||= {
			data: {},
			total: 0,
		};

		acc[fiscalYear].data[month] = amount;
		acc[fiscalYear].total += Number(amount);

		return acc;
	}, {}),
});