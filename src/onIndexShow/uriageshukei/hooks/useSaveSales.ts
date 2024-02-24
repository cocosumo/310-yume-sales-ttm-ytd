import {useMutation} from '@tanstack/react-query';
import {saveSales} from '../api';

export const useSaveSales = () => {
  
  
	useMutation({
		mutationFn: saveSales,
		onSuccess() {
			console.log('Sales saved');
		},
	});
};