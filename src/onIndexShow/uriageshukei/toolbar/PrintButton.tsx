import {Button, Tooltip} from '@chakra-ui/react';
import {useReactToPrint} from 'react-to-print';
import {FaPrint} from 'react-icons/fa';
import {useTypedWatch} from '../hooks';
import {type FormType} from '../formSettings';


export default function PrintButton() {
	const editMode = useTypedWatch({
		name: 'editMode',
	}) as FormType['editMode'];

	const handlePrint = useReactToPrint({
		documentTitle: 'Print This Document',
		onBeforePrint() {
			console.log('before printing...'); 
		},
		onAfterPrint() {
			console.log('after printing...'); 
		},
		removeAfterPrint: true,
	});

	return (
		<Tooltip
			label={editMode ? '印刷するには編集終了してください' : ''}
		>
			<Button 
				onClick={() => {
					handlePrint(null, () => document.getElementById('printable')); 
				}}
				isDisabled={editMode}
				leftIcon={<FaPrint />} 
				colorScheme='blue'
			>
        印刷
			</Button>
		</Tooltip>
	);
}