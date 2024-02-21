import {type ReactNode} from 'react';
import {CustomChakraProvider} from './customChakraProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();


export default function CustomProviders({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<CustomChakraProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</CustomChakraProvider>
	);
}