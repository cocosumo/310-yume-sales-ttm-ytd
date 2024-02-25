import {getFiscalYearRange} from 'helpers/getFiscalYearRange';
import {type FormType} from '../formSettings';
import {useTypedWatch} from './useTypedRHF';
import {useQuery} from '@tanstack/react-query';
import {type TyumeSales} from 'types';
import {getSalesRecords} from 'api/getSalesRecords';


export const useSalesRecords = <T = unknown>({
	select,
}: {
	select: (data: TyumeSales[]) => T;
}) => {
	const year = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const range = getFiscalYearRange(Number(year), 2);

	return useQuery({
		queryKey: ['salesRecords', range],
		queryFn: async () => getSalesRecords(range),
		select,
	});
   
};