import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {TtmTHead} from './TtmTHead';
import {TtmTBody} from './TtmTBody';


export default function TtmTable({
	store,
}: {
	store: string;
}) {

   
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
				<TtmTHead/>
				<TtmTBody store={store}/>
			</Table>
		</TableContainer>
	);
}