import {useStores} from 'hooks/useStores';
import {useMemo} from 'react';

export const useStoreOptions = () => {
	const {data, ...others} = useStores();

	const options = useMemo(
		() => data?.map((store) => ({
			recordId: store.$id.value,
			uuid: store.uuid.value,
			label: store.storeNameShort.value,
		})),
		[data],
	);

	return {
		data: options,
		...others,
	};
};