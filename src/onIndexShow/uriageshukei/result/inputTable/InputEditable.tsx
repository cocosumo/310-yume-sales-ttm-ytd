

import {Input} from '@chakra-ui/react';
import useEnterKeyAsTab from 'hooks/useEnterKeyAsTab';
import {useState} from 'react';

export default function InputEditable({
	year,
	month,
}: {
	year: number;
	month: number;
}) {
	const [hasFocus, setHasFocus] = useState(false);  
	const [value, setValue] = useState<number | ''>('');
	const inputRef = useEnterKeyAsTab();
  

	return (
		<Input 
			ref={inputRef}
			onFocus={() => {
				setHasFocus(true); 
			}}
			onBlur={() => {
				setHasFocus(false); 
			}}
			onChange={(e) => {
				const newValue = e.target.value;

				const parsedN = Number(newValue.replace(/,/g, ''));

				if (isNaN(parsedN)) {
					return;
				}
        
				if (
					newValue === ''
        || isNaN(parsedN)
				) {
					setValue('');
				} else {
					setValue(parsedN);
				}
			}}

			value={hasFocus ? value : value.toLocaleString()}
			fontSize={'12px'}
			textAlign={'right'}
			width={'80px'}
			size={'sm'}
			placeholder={hasFocus ? String(value) : '0'}
			px={1}
		/>

	);
}

