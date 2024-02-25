import {useStores} from '../../../hooks/useStores';
import {type FormType} from '../formSettings';
import {useTypedWatch} from './useTypedRHF';

export const useStoreUuidByRecId = () => {
	const storeId = useTypedWatch({
		name: 'store',
	}) as FormType['store'];

	return useStores({
		select(data) {
			const store = data.find((store) => store.$id.value === storeId);
			return store?.uuid.value;
		},
	});
};