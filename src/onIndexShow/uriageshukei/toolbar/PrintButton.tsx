import {Button} from '@chakra-ui/react';
import {useReactToPrint} from 'react-to-print';
import {FaPrint} from 'react-icons/fa';


export default function PrintButton() {
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
		<Button 
			onClick={() => {
				handlePrint(null, () => document.getElementById('printable')); 
			}}
			leftIcon={<FaPrint />} 
			colorScheme='blue'
		>
        印刷
		</Button>
	);
}