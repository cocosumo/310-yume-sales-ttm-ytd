

import {Input} from '@chakra-ui/react';
import useEnterKeyAsTab from 'hooks/useEnterKeyAsTab';
import {useSaveSales} from 'onIndexShow/uriageshukei/hooks';
import {useEffect, useRef, useState} from 'react';

export default function InputEditable({
	year,
	month,
	data = 0,
	storeUuid,
}: {
	year: number;
	month: number;
	data?: number | string;
	storeUuid?: string;
}) {
	
	const [hasFocus, setHasFocus] = useState(false);  

	const [value, setValue] = useState<number | string>(data);
	const inputRef = useEnterKeyAsTab();
	const {mutate} = useSaveSales();
	const originalValueRef = useRef(value);

	useEffect(() => {

		setValue(data);
	}, [data]);

	let displayValue: number | string = '';

	if (!value) {
		displayValue = '';
	} else if (hasFocus) {
		displayValue = value;
	} else {
		displayValue = Number(value).toLocaleString();
	}

	return (
		<Input 
			bgColor={!hasFocus && (displayValue === '' || displayValue === 0) ? 'gray.100' : ''}
			ref={inputRef}
			onFocus={() => {
				originalValueRef.current = value;
				setHasFocus(true); 
			}}
			onBlur={(e) => {
				if (!storeUuid) {
					return;
				}

				setHasFocus(false); 

				if (value !== originalValueRef.current) {
					mutate({
						fiscalYear: year,
						month,
						newSalesAmount: e.target.value,
						storeUuid,
					});
				}

			}}
			onChange={(e) => {
				const newValue = e.target.value;

				const parsedN = Number(newValue.replace(/,/g, ''));
				let valueToSave: number | '' = parsedN;

				if (
					newValue === ''
        || isNaN(parsedN)
				) {
					valueToSave = '';
				} 

				setValue(valueToSave);
				// SaveNewValue(valueToSave);
			}}

			value={displayValue}
			fontSize={'12px'}
			textAlign={'right'}
			width={'80px'}
			size={'sm'}
			
			px={1}
		/>

	);
}

