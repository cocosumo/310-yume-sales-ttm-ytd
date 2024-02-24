const fiscalYearStart = 9; // August

export const getFiscalYear = (date?: Date) => {
	const d = date ?? new Date();
	const year = d.getFullYear();
	const month = d.getMonth() + 1; // 0-indexed
	console.log('month', year,  month);
	const fiscalYear = month < fiscalYearStart 
		? year - 1 
		: year;

	return fiscalYear;
};