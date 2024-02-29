import {type SystemStyleObject, Td} from '@chakra-ui/react';
import {isWithinInterval, subMonths} from 'date-fns';
import {fiscalYearStart} from 'helpers/getFiscalYear';
import {atom, useAtomValue} from 'jotai';
import {useMemo, type ReactNode} from 'react';

export const hoveredDateAtom = atom<Date | undefined>(undefined); 

export const InputTd = ({
	fiscalYear,
	month,
	value,
}: {
	fiscalYear: number;
	month: number;
	value: ReactNode;
}) => {
	const hoveredTtmDate = useAtomValue(hoveredDateAtom);
  
	const hoveredSx: SystemStyleObject | undefined = useMemo(() => {
		if (hoveredTtmDate) {
			const resolveYear = month < fiscalYearStart ? Number(fiscalYear) + 1 : fiscalYear;
			if (isWithinInterval(new Date(resolveYear, month - 1, 1), {
				start: subMonths(hoveredTtmDate, 11),
				end: hoveredTtmDate,
			})) {
				return {
					bgColor: 'blue.50',
				};
			}
		
		}

	}, [hoveredTtmDate, fiscalYear, month]);
  

	return (<Td
		fontSize={'12px'} 
		isNumeric
		bgColor={value === '' ? 'gray.100' : ''}
		sx={hoveredSx}
		transition={'background-color 0.5s ease'}
	>
		{value}
	</Td>);
};