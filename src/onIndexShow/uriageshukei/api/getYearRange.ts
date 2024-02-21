export const getYearRange = async () => {
	const thisYear = new Date().getFullYear();
	const years = [thisYear];

	return years;
};