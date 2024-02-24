import {
	Table, 
	TableContainer,
} from '@chakra-ui/react';
import {InputTHead} from './InputTHead';
import InputTBody from './InputTBody';

export default function InputTable() {
	return (
		<TableContainer>
			<Table size={'sm'} variant='simple'>
				<InputTHead />
				<InputTBody />
			</Table>
		</TableContainer>
	);
}