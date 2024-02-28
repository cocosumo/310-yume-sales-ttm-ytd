import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {InputTHead} from './InputTHead';
import InputTBody from './InputTBody';

export default function InputTable({
	store,
}: {
	store: string;
}) {
	return (
		<TableContainer>
			<Table 
				size={'sm'} 
				variant='simple'
				sx={{
					// Add vertical border between cells
					'& td, & th:not(:first-of-type)': {
						border: '1px solid #E2E8F0',
					},

					width: 'fit-content',	
	
				}}
				layout={'fixed'}
			>
				<InputTHead />
				<InputTBody store={store}/>
			</Table>
		</TableContainer>
	);
}