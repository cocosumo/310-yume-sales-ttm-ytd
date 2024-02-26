import {Thead, Tr} from '@chakra-ui/react';
import {MonthTableHead} from '../common/MonthTableHead';

export const YtdTHead = () => (
	<Thead>
		<Tr>
			<MonthTableHead 
				firstHeadCell={'YTD'}
			/>

		</Tr>
	</Thead>
);