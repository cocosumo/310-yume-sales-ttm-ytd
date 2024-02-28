import {useStores} from 'hooks/useStores';
import {useMemo} from 'react';
import {useTypedWatch} from './useTypedRHF';
import {useCustomStoreOptions} from './useCustomStoreOptions';

export const useSelectedStoreName = (storeId: string) => {
	const selectedStore = useTypedWatch({
		name: 'store',
	}) as string;

	const {data} = useStores();
	const {data: customStoreOptions} = useCustomStoreOptions();

	const storeName = useMemo(
		() => data?.find((store) => store.$id.value === storeId)?.店舗名?.value, 
		[data, storeId],
	);

	if (selectedStore.includes('all')) {
		return '全店舗';
	}

	if (selectedStore.includes('custom')) {
		const customStoreLabel = selectedStore.slice(selectedStore.indexOf('-') + 1);
		const customStoreOption = customStoreOptions?.find((store) => store.label === customStoreLabel);
		if (!customStoreOption) return `${customStoreLabel}店舗集計`;

		return `${customStoreOption.data.length || data?.length}店舗合計`;
	}


	return storeName ?? '全店舗';

};