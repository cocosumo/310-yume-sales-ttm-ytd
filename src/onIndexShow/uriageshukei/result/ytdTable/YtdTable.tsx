import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {YtdTHead} from './YtdTHead';
import {YtdTBody} from './YtdTBody';


export default function YtdTable() {

   
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
				<YtdTHead/>
				<YtdTBody/>
			</Table>
		</TableContainer>
	);
}