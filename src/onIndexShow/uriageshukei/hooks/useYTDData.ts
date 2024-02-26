import {useMemo} from 'react';
import {type FormType} from '../formSettings';
import {useMonths} from './useMonths';
import {useParsedSalesRecords} from './useParsedSalesRecords';
import {useTypedWatch} from './useTypedRHF';

export type YTDDataMonth = Record<number, number>;
export type YTDDataResult = Record<number, YTDDataMonth>;

export const useYTDData = () => {
	const months = useMonths();
	
	const selectedFiscalYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const {data} = useParsedSalesRecords();

	const ttmData = useMemo(() => {
		if (!data || !selectedFiscalYear) return {};
    
		const result: YTDDataResult = {};
		const cummulativeSum = 0;
		// For ()


		return result;


	}, [data]);
};