import {Td} from '@chakra-ui/react';
import {useSetAtom} from 'jotai';
import {type ReactNode} from 'react';
import {hoveredDateAtom} from '../inputTable/InputTd';
import {fiscalYearStart} from 'helpers/getFiscalYear';



export const TtmTd = ({
	fiscalYear,
	month,
	value,
}: {
	fiscalYear: number;
	month: number;
	value: ReactNode;
}) => {
	const setHoveredTtmDate = useSetAtom(hoveredDateAtom);

	return (<Td
		fontSize={'11px'} 
		isNumeric
		bgColor={value === '' ? 'gray.100' : ''}
		_hover={{
			bgColor: 'blue.50',
		}}
		transition={'background-color 0.5s ease'}
		onMouseEnter={() => {
			const resolveYear = month < fiscalYearStart ? Number(fiscalYear) + 1 : fiscalYear;
			setHoveredTtmDate(new Date(resolveYear, month - 1, 1));
			
		}}
		onMouseLeave={() => {
			setHoveredTtmDate(undefined);
		}}
	>
		{value}
	</Td>);
};