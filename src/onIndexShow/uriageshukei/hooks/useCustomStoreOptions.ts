import {useQuery} from '@tanstack/react-query';
import {getCustomStoreOptions} from '../api';

export const useCustomStoreOptions = () => useQuery({
	queryKey: ['customStoreOptions'],
	queryFn: getCustomStoreOptions,
});