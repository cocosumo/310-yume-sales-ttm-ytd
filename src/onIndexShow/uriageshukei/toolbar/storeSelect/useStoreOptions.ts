import {useStores} from 'hooks/useStores';
import {useMemo} from 'react';

export const useStoreOptions = () => {
	const {data, ...others} = useStores();

	const options = useMemo(
		() => data?.map((store) => ({
			value: store.uuid.value,
			label: store.storeNameShort.value,
		})),
		[data],
	);

	return {
		data: options,
		...others,
	};
};