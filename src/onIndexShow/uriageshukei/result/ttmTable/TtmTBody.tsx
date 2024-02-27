import {Tbody} from '@chakra-ui/react';
import {TtmTr} from './TtmTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useTTMData, useTypedWatch} from 'onIndexShow/uriageshukei/hooks';

export const TtmTBody = () => {
	const year = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const showYears = [year - 1, year];

	const data = useTTMData();

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
						data={data[yr]}
					/>
				))
			}
		</Tbody>
	);
};