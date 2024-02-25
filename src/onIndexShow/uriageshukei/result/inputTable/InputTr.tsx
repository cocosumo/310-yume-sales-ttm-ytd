import {HStack, Td, Text, Tr} from '@chakra-ui/react';
import {getBatch} from 'helpers/getBatch';
import {useMonths} from '../../hooks/useMonths';
import InputEditable from './InputEditable';
import {type ParsedYearRecData} from 'onIndexShow/uriageshukei/hooks';

export default function InputTr({
	year,
	isSelected = false,
	data = {
		data: {},
		total: 0,
	},
}: {
	year: number;
	isSelected?: boolean;
	data?: ParsedYearRecData;
}) {
	const batch = getBatch(year); 
	const months = useMonths();

	return (
		<Tr>
			<Td
				bg={isSelected ? 'yellow.200' : ''}
			>
				<HStack
					justifyContent={'space-between'}
				>
					<Text as='span' fontSize={'sm'} color={'gray.500'}>
						{batch}期
					</Text>

					<Text as='span' fontSize={'sm'} color={'InfoText'}>
						{year}年9月～
					</Text>
				</HStack>
			</Td>

			{
				months.map((month) => (
					<Td key={month} isNumeric>
						<InputEditable 
							year={year} 
							month={month}
							data={data.data[month] || 0}
						/>
					</Td>
				))
			}

			<Td isNumeric>
				{(data.total || 0).toLocaleString()}
			</Td>

		</Tr>
	);
}