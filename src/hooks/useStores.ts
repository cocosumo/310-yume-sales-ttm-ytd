import {useQuery} from '@tanstack/react-query';
import {getStores} from 'api/getStores';
import {type TStores} from 'types';

type Params  <T = unknown> = {
	select: (data: TStores[]) => T;
};

export const useStores = <T = TStores[]>(params?: Params<T>) => useQuery({
	queryKey: ['stores'],
	queryFn: getStores,
	staleTime: 1000 * 60 * 30,
	gcTime: 1000 * 60 * 30,
	...params,
});