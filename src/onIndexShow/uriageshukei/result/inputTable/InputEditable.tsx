

import {Input} from '@chakra-ui/react';
import {sanitizeNumericString} from 'helpers/sanitizeNumericString';
import useInputKeys from 'hooks/useInputKeys';
import {useSaveSales} from 'onIndexShow/uriageshukei/hooks';
import {useRef, useState} from 'react';

export default function InputEditable({
	year,
	month,
	data = '',
	storeUuid,
}: {
	year: number;
	month: number;
	data?: number | string;
	storeUuid?: string;
}) {
	
	const [hasFocus, setHasFocus] = useState(false);  

	const [value, setValue] = useState<number | string | undefined>(data);

	const inputRef = useInputKeys();

	const {mutate} = useSaveSales();
	const originalValueRef = useRef(data);


	return (
		<Input 
			bgColor={!hasFocus && (value === '' || value === undefined) ? 'gray.100' : ''}
			ref={inputRef}
			onFocus={(e) => {

				originalValueRef.current = e.target.value.replace(/,/g, '');
				e.target.value = originalValueRef.current;
				e.target.select();
				setHasFocus(true); 
			}}
			defaultValue={data ? Number(data).toLocaleString() : ''}
			onBlur={(e) => {
				if (!storeUuid) {
					return;
				}

				setHasFocus(false); 

				if (e.target.value === originalValueRef.current) {
					e.target.value = originalValueRef.current 
						? Number(originalValueRef.current).toLocaleString() 
						: String(originalValueRef.current);
					
				} else {
					const cleanNumericStr = sanitizeNumericString(e.target.value);
					mutate({
						fiscalYear: year,
						month,
						newSalesAmount: cleanNumericStr,
						storeUuid,
					});

					
					e.target.value = cleanNumericStr 
						? Number(cleanNumericStr).toLocaleString() 
						: String(cleanNumericStr);
					
					originalValueRef.current = cleanNumericStr;
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
			}}
			
			placeholder={value ? Number(value).toLocaleString()  : '0'}
			fontSize={'12px'}
			textAlign={'right'}
			
			width={'80px'}
			size={'sm'}
			px={1}
			
		/>

	);
}

