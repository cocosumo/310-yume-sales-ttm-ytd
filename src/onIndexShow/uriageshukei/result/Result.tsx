import {VStack} from '@chakra-ui/react';
import SingleResult from './SingleResult';

import {useStoresToDisplay} from 'onIndexShow/uriageshukei/hooks/useStoresToDisplay';

export default function Result() {
	
	const storesToDisplay = useStoresToDisplay();

	return (
		<VStack
			id={'printable'}
		>
			{
				storesToDisplay.map((store) => (
					<SingleResult 
						key={store} 
						store={store} 
					/>
				))
			}
		
		</VStack>
	);
}