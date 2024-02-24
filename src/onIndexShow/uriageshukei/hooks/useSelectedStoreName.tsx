import {useStores} from 'hooks/useStores';
import {useTypedWatch} from './useTypedRHF';
import {useMemo} from 'react';

export const useSelectedStoreName = () => {
	const {data} = useStores();
	const storeId = useTypedWatch({
		name: 'store',
	});

	const storeName = useMemo(
		() => data?.find((store) => store.$id.value === storeId)?.店舗名?.value, 
		[data, storeId],
	);


	return storeName ?? '全店舗';

};