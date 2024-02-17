import {Container} from '@chakra-ui/react';
import Result from './result/Result';
import Toolbar from './toolbar/Toolbar';
import {ChakraProvider} from '@chakra-ui/react';

export default function UriageShukei() {
	return (
		<ChakraProvider>

			<Container 
				my={2}
      	maxW="100%"
				centerContent
			>
				<Toolbar />
				<Result />
			</Container>
		</ChakraProvider>

	);
}