import {HStack, Td, Text, Tr} from '@chakra-ui/react';
import {getBatch} from 'helpers/getBatch';
import {useMonths} from './useMonths';

export default function InputTr({
	year,
	isSelected = false,
}: {
	year: number;
	isSelected?: boolean;
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

					<Text as='span' fontSize={'md'} color={'InfoText'}>
						{year}年
					</Text>
				</HStack>
			</Td>

			{
				months.map((month) => (
					<Td key={month} isNumeric>
						{(Math.floor(Math.random() * 100000) + 10000).toLocaleString()}
					</Td>
				))
			}

			<Td isNumeric>
				{(Math.floor(Math.random() * 1000000) + 100000).toLocaleString()}
			</Td>

		</Tr>
	);
}