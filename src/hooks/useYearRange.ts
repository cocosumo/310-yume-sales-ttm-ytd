import {useQuery} from '@tanstack/react-query';
import {getYearRange} from '../api/getYearRange';

export const useYearRange = () => useQuery({
	queryKey: ['dateRange'],
	queryFn: getYearRange,
});