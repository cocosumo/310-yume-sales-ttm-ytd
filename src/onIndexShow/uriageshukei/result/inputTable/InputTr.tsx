import {HStack, Td, Text, Tr} from '@chakra-ui/react';
import {getBatch} from 'helpers/getBatch';
import {useMonths} from '../../hooks/useMonths';
import InputEditable from './InputEditable';
import {useTypedWatch, type ParsedYearRecData} from 'onIndexShow/uriageshukei/hooks';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {InputTd} from './InputTd';

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
	const editMode = useTypedWatch({
		name: 'editMode',	
	}) as FormType['editMode'];

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

			{(!storeUuid || !editMode) && months.map((month) => {
				let value: string | number = data.data[month] ?? '';

				if (value !==  '') {
					value = Number(value).toLocaleString();
				}

				return (
					<InputTd 
						fiscalYear={year}
						month={month}
						key={month} 
						value={value} 
					/>
						
				);
			})}

			{
				storeUuid && editMode && months.map((month) => (
					<Td key={month}>

						<InputEditable 
							year={year} 
							month={month}
							data={data.data[month]}
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