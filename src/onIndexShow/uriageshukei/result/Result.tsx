import {HStack, VStack} from '@chakra-ui/react';
import InputTable from './inputTable/InputTable';
import ResultTitle from './ResultTitle';
import TtmTable from './ttmTable/TtmTable';
import YtdTable from './ytdTable/YtdTable';
import TtmChart from './ttmChart/TtmChart';
import YtdChart from './ytdChart/YtdChart';

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
			<HStack>
				<TtmChart />
				<YtdChart />
			</HStack>
		</VStack>
	);
}