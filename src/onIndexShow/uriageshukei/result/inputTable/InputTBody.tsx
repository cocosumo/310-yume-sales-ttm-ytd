import {Tbody} from '@chakra-ui/react';
import {useParsedSalesRecords, useTypedWatch} from 'onIndexShow/uriageshukei/hooks';
import InputTr from './InputTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useDisplayYears} from '../../hooks/useDisplayYears';

export default function InputTBody() {

	const selectedYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const parsedSelectedYear = Number(selectedYear);

	const showYears = useDisplayYears(parsedSelectedYear);
	const {
		data = {},
	} = useParsedSalesRecords();

	console.log('data', data);
  
	return (
		<Tbody
			sx={{
				'& tr > td' : {
					padding: '0.25rem 0.25rem',
				},
			}}
		>
			{
				showYears.map((yr) => (
					<InputTr  
						key={yr} 
						year={yr} 
						isSelected={yr === parsedSelectedYear}
						data={data[yr]}
					/>
				))
			}
      
		</Tbody>
	);
}