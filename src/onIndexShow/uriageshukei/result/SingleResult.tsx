import {HStack, VStack} from '@chakra-ui/react';
import InputTable from './inputTable/InputTable';
import ResultTitle from './ResultTitle';
import TtmTable from './ttmTable/TtmTable';
import YtdTable from './ytdTable/YtdTable';
import TtmChart from './ttmChart/TtmChart';
import YtdChart from './ytdChart/YtdChart';

export default function SingleResult({
	store,
}: {
	store: string;
}) {

	return (
		<VStack
			alignItems={'flex-start'}
			px={4}
			py={4}
			spacing={8}
			width={'100%'}
		>
			<ResultTitle store={store}/>
			<InputTable store={store} />
			<TtmTable store={store}/>
			<YtdTable />
			<HStack justifyContent={'space-between'} width={'100%'}>
				<TtmChart store={store} />
				<YtdChart store={store} />
			</HStack>
		</VStack>
	);
}