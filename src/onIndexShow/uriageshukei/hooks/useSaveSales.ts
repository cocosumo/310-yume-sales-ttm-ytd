import {useMutation, useQueryClient} from '@tanstack/react-query';
import {saveSales} from '../api';

export const useSaveSales = () => {
	const queryClient = useQueryClient();

	
	return useMutation({
		mutationFn: saveSales,
		async onSuccess() {
			return queryClient.invalidateQueries({
				queryKey: ['salesRecords'],

			});
		},
	});
};