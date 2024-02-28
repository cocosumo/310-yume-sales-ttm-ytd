import {Tbody} from '@chakra-ui/react';
import {
	useParsedSalesRecords, 
	useStoreUuidByRecId, 
	useTypedWatch,
} from 'onIndexShow/uriageshukei/hooks';
import InputTr from './InputTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useDisplayYears} from '../../hooks/useDisplayYears';

export default function InputTBody({
	store,
}: {
	store: string;
}) {

	const selectedYear = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const parsedSelectedYear = Number(selectedYear);

	const showYears = useDisplayYears(parsedSelectedYear);
	const {
		data = {},
	} = useParsedSalesRecords({store});

	const {data: storeUuid} = useStoreUuidByRecId({
		store,
	});
  
	return (
		<Tbody
			sx={{
				'& tr > td' : {
					padding: '0.5rem 0.5rem',
					height: '35px',	
				},
				'@media print':{
					'& tr > td' : {
						padding: '0.25rem 0.25rem',
						height: '35px',	
						fontSize: '0.8rem',
					},
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
						storeUuid={storeUuid}
					/>
				))
			}
      
		</Tbody>
	);
}