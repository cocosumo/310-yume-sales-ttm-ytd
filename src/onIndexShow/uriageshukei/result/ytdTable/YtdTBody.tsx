import {Tbody} from '@chakra-ui/react';
import {useTypedWatch, useYTDData} from 'onIndexShow/uriageshukei/hooks';
import {TtmTr} from '../ttmTable/TtmTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';

export const YtdTBody = () => {
	const year = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const data = useYTDData();
	
	const showYears = Array.from({length: 3}, (_, i) => year - 2 + i);
	
	console.log('ytdData', data);

	return (
		<Tbody
			sx={{
				'& tr > td' : {
					padding: '0.5rem 0.5rem',
				},
			}}
		>
			{
				showYears.map((yr) => (
					<TtmTr 
						key={yr} 
						fiscalYear={yr} 
						data={data?.[yr]}
					/>
				))
			}
		</Tbody>
	);
};