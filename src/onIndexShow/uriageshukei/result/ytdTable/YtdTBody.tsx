import {useTypedWatch, useYTDData} from 'onIndexShow/uriageshukei/hooks';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import CustomTBody from '../common/CustomTBody';
import {YtdTr} from './YtdTr';

export const YtdTBody = ({
	store,
}: {
	store: string;
}) => {
	const year = useTypedWatch({
		name: 'year',
	}) as FormType['year'];

	const data = useYTDData({store});
	
	const showYears = Array.from({length: 3}, (_, i) => year - 2 + i);
	
	return (
		<CustomTBody>
			{
				showYears.map((yr) => (
					<YtdTr 
						key={yr} 
						fiscalYear={yr} 
						data={data?.[yr]}
					/>
				))
			}
		</CustomTBody>
	);
};