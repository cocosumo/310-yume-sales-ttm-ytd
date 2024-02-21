import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {useYearRange} from 'hooks';

export default function YearSelect() {

	const {data} = useYearRange();

	return (
		<FormControl width={'200px'}>
			<FormLabel size={'xs'}>年度</FormLabel>
			<Select placeholder='選択してください' variant='filled' size='md' >
				{data?.map((year) => (
					<option key={year} value={year}>{year}</option>
				))}
			</Select>
		</FormControl>
	);
}