import {HStack, Heading, Text} from '@chakra-ui/react';
import {useSelectedStoreName} from '../hooks';
import EditButton from './common/EditButton';

export default function ResultTitle({
	store,
}: {
	store: string;
}) {

	const storeName = useSelectedStoreName(store);

	return (
		<HStack
			width={'100%'}
			justifyContent={'space-between'}
		>
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
			<EditButton />
		</HStack>
	);
}