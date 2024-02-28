import {VStack} from '@chakra-ui/react';
import SingleResult from './SingleResult';
import {useTypedWatch} from '../hooks';
import {type FormType} from '../formSettings';

export default function Result() {
	const store = useTypedWatch({
		name: 'store',
	}) as FormType['store'];
	
	return (
		<VStack
			id={'printable'}
			sx={{
				'@media print': {
					width: '100%',
					pageBreakAfter: 'always',
					pageBreakInside: 'avoid',
				},
			}}
		>
			<SingleResult store={store}/>
			
		</VStack>
	);
}