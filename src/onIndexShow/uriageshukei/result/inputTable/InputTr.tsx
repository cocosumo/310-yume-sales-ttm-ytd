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
	storeUuid,
}: {
	year: number;
	isSelected?: boolean;
	data?: ParsedYearRecData;
	storeUuid: string | undefined;
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

			{!storeUuid && months.map((month) => {
				let value: string | number = data.data[month] || '';

				if (typeof value === 'number' && value !== 0) {
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

			{
				storeUuid && months.map((month) => (
					<Td key={month} isNumeric>

						<InputEditable 
							year={year} 
							month={month}
							data={data.data[month] || 0}
							storeUuid={storeUuid}
						/>
					</Td>
				))
			}

			<Td fontSize={'12px'} isNumeric>
				{(data.total || 0).toLocaleString()}
			</Td>

		</Tr>
	);
}