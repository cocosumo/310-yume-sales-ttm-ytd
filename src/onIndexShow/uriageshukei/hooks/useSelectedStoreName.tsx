import {useStores} from 'hooks/useStores';
import {useMemo} from 'react';

export const useSelectedStoreName = (storeId: string) => {
	const {data} = useStores();

	const storeName = useMemo(
		() => data?.find((store) => store.$id.value === storeId)?.店舗名?.value, 
		[data, storeId],
	);


	return storeName ?? '全店舗';

};