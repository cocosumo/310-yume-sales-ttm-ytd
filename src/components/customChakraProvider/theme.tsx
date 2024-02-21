import {extendTheme} from '@chakra-ui/react';

const activeLabelStyles = {
	transform: 'scale(0.85) translateY(-24px)',
};

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
