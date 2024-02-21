import {Container} from '@chakra-ui/react';
import Result from './result/Result';
import Toolbar from './toolbar/Toolbar';
import {CustomProviders} from 'components';

export default function UriageShukei() {
	return (
		<CustomProviders>

			<Container 
				my={2}
      	maxW="100%"
				centerContent
			>
				<Toolbar />
				<Result />
			</Container>
		</CustomProviders>

	);
}