import {Th, Thead, Tr} from '@chakra-ui/react';
import {MonthTableHead} from '../common/MonthTableHead';

export const InputTHead = () => (
	<Thead>
		<Tr>
			<MonthTableHead />
			<Th 
				textAlign={'center'}
				sx={{
					width: '120px',
					'@media print': {
						width: '100px',
					},
			
				}}
			>
					合計
			</Th>
		</Tr>
	</Thead>
);