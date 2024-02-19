import {FormControl, FormLabel, Select} from '@chakra-ui/react';

export default function StoreSelect() {
  
	return (
		<FormControl>
			<FormLabel>店舗</FormLabel>
			<Select placeholder='medium size' size='md' />

		</FormControl>
	);
}