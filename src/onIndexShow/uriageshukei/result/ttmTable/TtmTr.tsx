
import {Td, Tr} from '@chakra-ui/react';
import {useMonths, type TTMDataResult} from 'onIndexShow/uriageshukei/hooks';
import {TtmTd} from './TtmTd';


export const TtmTr = ({
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
					<TtmTd 
						key={month} 
						value={value}
						fiscalYear={fiscalYear}
						month={month}
					>
					</TtmTd>
				);
			})}
		</Tr>
	);
};