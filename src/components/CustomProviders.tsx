import {type ReactNode} from 'react';
import {CustomChakraProvider} from './customChakraProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();


export const CustomProviders = ({
	children,
}: {
	children: ReactNode;
}) => (
	<CustomChakraProvider>
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	</CustomChakraProvider>
);