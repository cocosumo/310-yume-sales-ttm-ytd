import {Tbody} from '@chakra-ui/react';
import {type ReactNode} from 'react';

export default function CustomTBody({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<Tbody
			sx={{
				'& tr > td' : {
					padding: '0.5rem 0.5rem',
					height: '35px',	
				},
				'@media print':{
					'& tr > td' : {
						padding: '0.25rem 0.25rem',
						height: '',	
					},
				},
			}}
		>
			{children}
		</Tbody>
	);
}