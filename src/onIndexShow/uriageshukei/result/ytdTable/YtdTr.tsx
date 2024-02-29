import {Td, Tr} from '@chakra-ui/react';
import {useMonths, type TTMDataResult} from 'onIndexShow/uriageshukei/hooks';

export const YtdTr = ({
	fiscalYear,
	data,
}: {
	fiscalYear: number;
	data?: TTMDataResult[number];
}) => {
	const months = useMonths();
	
	return (

		<Tr>
			<Td>{fiscalYear}年</Td>
			{months.map((month) => {
				let value = data?.[month] ?? '';
				if (typeof value === 'number') {
					value = value.toLocaleString();
				}

				return (
					<Td 
						key={month} 
						fontSize={'12px'} 
						isNumeric
						bgColor={value === '' ? 'gray.100' : ''}
					>
						{value}
					</Td>
				);
			})}
		</Tr>
	);
};