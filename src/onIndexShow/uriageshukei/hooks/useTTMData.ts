import {useMemo} from 'react';
import {type FormType} from '../formSettings';
import {useParsedSalesRecords} from './useParsedSalesRecords';
import {useTypedWatch} from './useTypedRHF';
import {useMonths} from './useMonths';

export type TTMDataMonth = Record<number, number>;
export type TTMDataResult = Record<number, TTMDataMonth>;

export const useTTMData = ({
	store,
}: {
	store: string;
}) => {
	const months = useMonths();
	
	const selectedFiscalYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const {data} = useParsedSalesRecords({store});
	

	const ttmData: TTMDataResult = useMemo(() => {
		if (!data || !selectedFiscalYear) return {};

		const result: TTMDataResult = {};
		for (let yearIdx = selectedFiscalYear; yearIdx > selectedFiscalYear - 2; yearIdx--) {
			for (let m = 0; m < 12; m++) {
				let sum = 0;
				const currentMonthAmount = Number(data[yearIdx]?.data?.[months[m]] ?? 0);

				if (!currentMonthAmount) {
					continue;
				}

				// Sum of previous year
				for (let prev = m + 1; prev < 12; prev++) {
					sum += Number(data[yearIdx - 1]?.data?.[months[prev]] ?? 0);
				}

				// Sum of current year
				for (let cur = 0; cur <= m; cur++) {
					sum += Number(data[yearIdx]?.data?.[months[cur]] ?? 0);
				}
				
				result[yearIdx] ||= {};

				result[yearIdx][months[m]] = sum;
			}
		}

		return result;
	}, [data, selectedFiscalYear, months]);




	return ttmData;
};