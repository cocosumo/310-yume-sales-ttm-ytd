import {extendTheme} from '@chakra-ui/react';


export const theme = extendTheme({
	components: {
		FormLabel: {
			baseStyle: {
				fontSize: 'sm',
				color: 'gray.500',
				marginBottom: '4px',
			},
		},
	},
});
