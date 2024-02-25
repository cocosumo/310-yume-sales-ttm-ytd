import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {InputTHead} from './InputTHead';
import InputTBody from './InputTBody';

export default function InputTable() {
	return (
		<TableContainer>
			<Table 
				size={'sm'} 
				variant='simple'
				width={'fit-content'}
				sx={{
					// Add vertical border between cells
					'& td, & th:not(:first-of-type)': {
						border: '1px solid #E2E8F0',
					},
	
				}}
				layout={'fixed'}
			>
				<InputTHead />
				<InputTBody />
			</Table>
		</TableContainer>
	);
}