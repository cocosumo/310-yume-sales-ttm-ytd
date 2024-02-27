import {VStack} from '@chakra-ui/react';
import InputTable from './inputTable/InputTable';
import ResultTitle from './ResultTitle';
import TtmTable from './ttmTable/TtmTable';
import YtdTable from './ytdTable/YtdTable';

export default function Result() {
	return (
		<VStack
			height={'2000px'}
			alignItems={'flex-start'}
			px={4}
			spacing={8}
		>
			<ResultTitle />
			<InputTable />
			<TtmTable />
			<YtdTable />
		</VStack>
	);
}