import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {getFiscalYear} from 'helpers/getFiscalYear';
import {useYearRange} from 'hooks';
import {useTypedForm} from 'onIndexShow/uriageshukei/hooks';
import {Controller} from 'react-hook-form';

export default function YearSelect() {
	const {control} = useTypedForm();
	const {data} = useYearRange();

	return (
		<Controller 
			control={control}
			name='year'
			render={({
				field,
			}) => (
				<FormControl width={'200px'}>
					<FormLabel size={'xs'}>年度</FormLabel>
					<Select 
						{...field} 
						variant='filled' 
						size='md'
						value={field.value || getFiscalYear()}
					>
						{data?.map((year) => (
							<option key={year} value={year}>{year}</option>
						))}
					</Select>
				</FormControl>
			)}		
		/>

	);
}