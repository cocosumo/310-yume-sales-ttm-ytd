import {Container} from '@chakra-ui/react';
import Result from './result/Result';
import Toolbar from './toolbar/Toolbar';
import {CustomChakraProvider} from 'components/customChakraProvider';

export default function UriageShukei() {
	return (
		<CustomChakraProvider>

			<Container 
				my={2}
      	maxW="100%"
				centerContent
			>
				<Toolbar />
				<Result />
			</Container>
		</CustomChakraProvider>

	);
}