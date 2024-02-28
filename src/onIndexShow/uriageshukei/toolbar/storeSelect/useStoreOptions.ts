import {useStores} from 'hooks/useStores';
import {useCallback} from 'react';

export const useStoreOptions = () => useStores({
	select: useCallback((data) => data?.map((store) => ({
		recordId: store.$id.value,
		label: store.storeNameShort.value,
	})), []), 
});