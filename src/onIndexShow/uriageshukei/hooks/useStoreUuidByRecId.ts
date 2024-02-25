import {useCallback} from 'react';
import {useStores} from '../../../hooks/useStores';
import {type FormType} from '../formSettings';
import {useTypedWatch} from './useTypedRHF';

export const useStoreUuidByRecId = () => {
	const storeId = useTypedWatch({
		name: 'store',
	}) as FormType['store'];

	return useStores({
		select: useCallback((data) => {
			console.log('trggeredssss');
			const store = data.find((store) => store.$id.value === storeId);
			return store?.uuid.value;
		}, [storeId]),
	});
};