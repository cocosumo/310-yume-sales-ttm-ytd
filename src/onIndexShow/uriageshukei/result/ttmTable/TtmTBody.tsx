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
		<Tbody>
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