import {Td, Tr} from '@chakra-ui/react';
import {useMonths, type TTMDataResult} from 'onIndexShow/uriageshukei/hooks';

export const TtmTr = ({
	fiscalYear,
	data,
}: {
	fiscalYear: number;
	data?: TTMDataResult[number];
}) => {
	const months = useMonths();
	console.log('fiscalYear', fiscalYear);
	
	return (

		<Tr>
			<Td>{fiscalYear}年</Td>
			{months.map((month) => {
				let value: string | number | undefined = data?.[month] ?? '';
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