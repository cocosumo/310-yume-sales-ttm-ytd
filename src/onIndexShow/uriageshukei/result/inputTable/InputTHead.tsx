import {Th, Thead, Tr} from '@chakra-ui/react';
import {MonthTableHead} from '../common/MonthTableHead';

export const InputTHead = () => (
	<Thead>
		<Tr>
			<MonthTableHead />
			<Th width={'120px'} textAlign={'center'}>合計</Th>
		</Tr>
	</Thead>
);