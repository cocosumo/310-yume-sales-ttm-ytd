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
			alignItems={'flex-start'}
			px={4}
			py={4}
			spacing={8}
			id={'printable'}
			width={'100%'}
		>
			<ResultTitle />
			<InputTable />
			<TtmTable />
			<YtdTable />
			<HStack justifyContent={'space-between'} width={'100%'}>
				<TtmChart />
				<YtdChart />
			</HStack>
		</VStack>
	);
}