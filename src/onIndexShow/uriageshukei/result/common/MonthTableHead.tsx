import {Th} from '@chakra-ui/react';
import {useMonths} from 'onIndexShow/uriageshukei/hooks';
import {type ReactNode} from 'react';

export const MonthTableHead = ({
	firstHeadCell,
}: {
	firstHeadCell?: ReactNode;
}) => {
	const months = useMonths();

	return <>
  	<Th 
			sx={{
				width: '145px',
			}}>
			{firstHeadCell}
		</Th>

		{
			months.map((month) => (
				<Th 
					sx={{
						width: '95px',
						'@media print': {
							width: '75px',
						},
					}} 
					color={'gray.500'}
					key={month} 
					textAlign={'center'}>
					{month}月
				</Th>
			))
		} 
  
	</>;
};