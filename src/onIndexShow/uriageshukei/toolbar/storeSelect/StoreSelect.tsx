import {FormControl, FormLabel, Select} from '@chakra-ui/react';

export default function StoreSelect() {
  
	return (
		<FormControl size={'sm'} width={'200px'} orientation='horizontal'>
			<FormLabel>店舗</FormLabel>
			<Select placeholder='medium size' variant='filled'/>


		</FormControl>
	);
}