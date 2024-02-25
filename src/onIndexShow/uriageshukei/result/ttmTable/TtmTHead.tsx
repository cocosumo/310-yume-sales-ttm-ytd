import {Thead, Tr} from '@chakra-ui/react';
import {MonthTableHead} from '../common/MonthTableHead';

export const TtmTHead = () => (
	<Thead>
		<Tr>
			<MonthTableHead 
				firstHeadCell={'TTM'}
			/>

		</Tr>
	</Thead>
);