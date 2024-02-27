import {useMemo} from 'react';

export const useDisplayYears = (year: number) => {


	const showYears = useMemo(() => {

		const startYear = year - 2;
		const endYear = year + 1;
		const years = [];

		for (let i = startYear; i <= endYear; i++) {
			years.push(i);
		}

		return years;
	}, [year]);

	return showYears;
};