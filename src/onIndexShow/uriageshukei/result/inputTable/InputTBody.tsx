import {Tbody} from '@chakra-ui/react';
import {useTypedWatch} from 'onIndexShow/uriageshukei/hooks';
import InputTr from './InputTr';
import {useMemo} from 'react';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';

export default function InputTBody() {

	const selectedYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const showYears = useMemo(() => {

		const startYear = Number(selectedYear) - 2;
		const endYear = Number(selectedYear) + 1;
		const years = [];

		for (let i = startYear; i < endYear; i++) {
			years.push(i);
		}

		return years;
	}, [selectedYear]); 

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
						isSelected={yr === Number(selectedYear)}
					/>
				))
			}
      
		</Tbody>
	);
}