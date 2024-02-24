import {HStack, Heading, Text} from '@chakra-ui/react';
import {useSelectedStoreName} from '../hooks';

export default function ResultTitle() {

	const storeName = useSelectedStoreName();


	return (
		<HStack textAlign={'center'} width={'100%'}>
			<Heading size={'md'}>
				{storeName}
			</Heading>
			<Text 
				fontSize="sm"
				color={'gray.500'}
			>
				{'(契約ベース総売上 ※月報より）'}
			</Text>
		</HStack>
	);
}