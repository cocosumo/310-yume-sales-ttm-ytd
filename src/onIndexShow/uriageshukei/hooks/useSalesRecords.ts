import {getFiscalYearRange} from 'helpers/getFiscalYearRange';
import {type FormType} from '../formSettings';
import {useTypedWatch} from './useTypedRHF';
import {useQuery} from '@tanstack/react-query';
import {type TyumeSales} from 'types';
import {getSalesRecords} from 'api/getSalesRecords';
import {useStoreUuidByRecId} from 'onIndexShow/uriageshukei/hooks/useStoreUuidByRecId';


export const useSalesRecords = <T = unknown>({
	select,
}: {
	select: (data: TyumeSales[]) => T;
}) => {
	const [
		year,
	] = useTypedWatch({
		name: [
			'year',
		],
	}) as [
		FormType['year'],
	];
	const {data: storeUuid} = useStoreUuidByRecId();
	const range = getFiscalYearRange(Number(year), 2);

	console.log('storeUid', storeUuid);

	return useQuery({
		queryKey: ['salesRecords', {...range, storeUuid}],
		queryFn: async () => getSalesRecords({...range, storeUuid}),
		select,
	});
   
};