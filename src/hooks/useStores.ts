import {useQuery} from '@tanstack/react-query';
import {getStores} from 'api/getStores';

export const useStores = () => useQuery({
	queryKey: ['stores'],
	queryFn: getStores,
	staleTime: 1000 * 60 * 30,
	gcTime: 1000 * 60 * 30,
});