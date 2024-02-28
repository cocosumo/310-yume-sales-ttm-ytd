import {VStack} from '@chakra-ui/react';
import SingleResult from './SingleResult';

import {useStoresToDisplay} from 'hooks/useStoresToDisplay';

export default function Result() {
	
	const storesToDisplay = useStoresToDisplay();

	return (
		<VStack
			id={'printable'}
			sx={{
				'@media print': {
					width: '100%',
					pageBreakAfter: 'always',
					pageBreakInside: 'avoid',
				},
			}}
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