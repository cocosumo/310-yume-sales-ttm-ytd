import {TtmTr} from './TtmTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useTTMData, useTypedWatch} from 'onIndexShow/uriageshukei/hooks';
import CustomTBody from '../common/CustomTBody';

export const TtmTBody = () => {
	const year = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const showYears = [year - 1, year];

	const data = useTTMData();

	return (
		<CustomTBody>
			{
				showYears.map((yr) => (
					<TtmTr 
						key={yr} 
						fiscalYear={yr} 
						data={data[yr]}
					/>
				))
			}
		</CustomTBody>
	);
};