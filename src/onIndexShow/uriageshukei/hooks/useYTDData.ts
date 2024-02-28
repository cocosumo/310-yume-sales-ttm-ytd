import {useMemo} from 'react';
import {type FormType} from '../formSettings';
import {useMonths} from './useMonths';
import {useParsedSalesRecords} from './useParsedSalesRecords';
import {useTypedWatch} from './useTypedRHF';

export type YTDDataMonth = Record<number, number>;
export type YTDDataResult = Record<number, YTDDataMonth>;

export const useYTDData = ({
	store,
}: {
	store: string;
}) => {
	const months = useMonths();
	
	const selectedFiscalYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const {data} = useParsedSalesRecords({store});

	const ytdData = useMemo(() => {
		if (!data || !selectedFiscalYear) return {};
    
		const result: YTDDataResult = {};
		for (let yearIdx = selectedFiscalYear; yearIdx >= selectedFiscalYear - 2; yearIdx--) {
			let cummulative = 0;
			for (let m = 0; m < 12; m++) {
				const currentMonthAmount = data[yearIdx]?.data?.[months[m]] ?? 0;

				if (!currentMonthAmount) {
					continue;
				}

				cummulative += Number(currentMonthAmount);
				result[yearIdx] ||= {};
				result[yearIdx][months[m]] = cummulative;

			}
			
		}


		return result;


	}, [data, selectedFiscalYear, months]);


	return ytdData;
};