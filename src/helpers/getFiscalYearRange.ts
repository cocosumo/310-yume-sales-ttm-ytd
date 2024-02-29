import {format} from 'date-fns';
import {fiscalYearStart} from './getFiscalYear';


type FiscalYearRange = {
	start: string; 
	end: string; 
};

/**
 * 
 * @param year 
 * @param offset adjust the start year by this amount
 * @returns start and end of the fiscal year
 */
export const getFiscalYearRange = (year: number, offset = 0): FiscalYearRange => {
	const start = new Date(year - offset, fiscalYearStart - 1, 1);
	const end = new Date(year + 2, fiscalYearStart, 1);

	return {
		start: format(start, 'yyyy-MM-dd'),
		end: format(end, 'yyyy-MM-dd'),
	};
  
  
};