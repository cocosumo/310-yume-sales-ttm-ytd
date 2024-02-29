import {fiscalYearStart} from './getFiscalYear';

export const getActualDateFromFiscalDate = ({
	fiscalYear,
	month,
}: {
	fiscalYear: number;
	month: number;
}) => {
	const actualYear = month < Number(fiscalYearStart) 
		? fiscalYear + 1  
		: fiscalYear;

	return `${actualYear}-${month.toString().padStart(2, '0')}-01`;
};