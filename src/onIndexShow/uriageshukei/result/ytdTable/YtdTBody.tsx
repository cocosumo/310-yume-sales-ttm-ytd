import {useTypedWatch, useYTDData} from 'onIndexShow/uriageshukei/hooks';
import {TtmTr} from '../ttmTable/TtmTr';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import CustomTBody from '../common/CustomTBody';

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
					<TtmTr 
						key={yr} 
						fiscalYear={yr} 
						data={data?.[yr]}
					/>
				))
			}
		</CustomTBody>
	);
};