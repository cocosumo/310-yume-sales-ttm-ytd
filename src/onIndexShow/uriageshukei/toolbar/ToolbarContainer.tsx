import {HStack} from '@chakra-ui/react';
import {type ReactNode} from 'react';


export default function ToolbarContainer({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<HStack
			spacing={4}
			rounded={'md'}
			bg={'white'}
			boxShadow={'md'}
			width={'100%'}
			p={4}
			border={'1px'}
			borderColor={'gray.200'}
			position={'sticky'}
			top={14}
			left={0}
		>
			
			{children}
		</HStack>);
}