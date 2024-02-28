import {useCallback} from 'react';
import {useStores} from '../../../hooks/useStores';
import {type FormType} from '../formSettings';

export const useStoreUuidByRecId = ({
	store,
}: {
	store: FormType['store'];
}) => useStores({
	select: useCallback((data) => {
		if (!store) return;
		const storeData = data.find(({$id}) => $id.value === store);
		return storeData?.uuid.value;
	}, [store]),
});