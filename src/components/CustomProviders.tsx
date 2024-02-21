import {type ReactNode} from 'react';
import {CustomChakraProvider} from './customChakraProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();


export const CustomProviders = ({
	children,
}: {
	children: ReactNode;
}) => (
	<CustomChakraProvider>
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	</CustomChakraProvider>
);