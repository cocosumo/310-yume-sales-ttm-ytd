import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {useStoreOptions} from './useStoreOptions';

export default function StoreSelect() {
  
	const {data} = useStoreOptions();

	return (
		<FormControl size={'sm'} width={'200px'} orientation='horizontal'>
			<FormLabel>店舗</FormLabel>
			<Select placeholder='全店舗' variant='filled'>
				{data?.map((store) => (
					<option key={store.value} value={store.value}>{store.label}</option>
				))}
			</Select>


		</FormControl>
	);
}