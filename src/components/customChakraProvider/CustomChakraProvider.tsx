import {ChakraProvider} from '@chakra-ui/react';
import {type ReactNode} from 'react';
import {theme} from './theme';

export const CustomChakraProvider = ({children}: {children: ReactNode}) => (
	<ChakraProvider theme={theme}>
		{children}
	</ChakraProvider>
);