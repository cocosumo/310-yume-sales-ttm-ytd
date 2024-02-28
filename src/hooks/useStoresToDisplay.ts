import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useTypedWatch} from 'onIndexShow/uriageshukei/hooks';
import {useStoreOptions} from 'onIndexShow/uriageshukei/toolbar/storeSelect/useStoreOptions';
import {useMemo} from 'react';

export const useStoresToDisplay = () => {
	const selectedStoreOption = useTypedWatch({
		name: 'store',
	}) as FormType['store'];

	const {data: storeOptions} = useStoreOptions();

	const resolveStores = useMemo(() => {
		const isCustom = selectedStoreOption.includes('custom');

		if (isCustom && storeOptions) {
			return storeOptions.map((store) => store.recordId);
		}
 
		return [selectedStoreOption];
		
	}, [selectedStoreOption, storeOptions]);

	return resolveStores;

};