import {Container} from '@chakra-ui/react';
import Result from './result/Result';
import Toolbar from './toolbar/Toolbar';
import {CustomProviders} from 'components';
import FormContainer from './FormContainer';

export default function UriageShukei() {
	


	return (
		<CustomProviders>
			<FormContainer>
				<Container 
					my={2}
      		maxW="100%"
					
				>

					<Toolbar />
					<Result />
				</Container>
			</FormContainer>

		</CustomProviders>

	);
}