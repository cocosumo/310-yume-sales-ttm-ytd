import {FormControl, FormLabel, Select} from '@chakra-ui/react';

export default function YearSelect() {
	return (
		<FormControl width={'200px'}>
			<FormLabel size={'xs'}>年度</FormLabel>
			<Select placeholder='medium size' variant='filled' size='md' />
		</FormControl>
	);
}