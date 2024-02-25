import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {InputTHead} from './InputTHead';
import InputTBody from './InputTBody';

export default function InputTable() {
	return (
		<TableContainer minW={'1200px'}>
			<Table 
				size={'sm'} 
				variant='simple'
				sx={{
					// Add vertical border between cells
					'& td, & th': {
						borderRight: '1px solid #E2E8F0',
					},
					// Outer table border
					border: '1px solid #E2E8F0',
				}}
			>
				<InputTHead />
				<InputTBody />
			</Table>
		</TableContainer>
	);
}