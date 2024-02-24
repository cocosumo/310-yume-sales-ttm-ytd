import {VStack} from '@chakra-ui/react';
import InputTable from './inputTable/InputTable';
import ResultTitle from './ResultTitle';

export default function Result() {
	return (
		<VStack
			height={'2000px'}
			alignItems={'flex-start'}
			px={8}
		>
			<ResultTitle />
			<InputTable />
		</VStack>
	);
}