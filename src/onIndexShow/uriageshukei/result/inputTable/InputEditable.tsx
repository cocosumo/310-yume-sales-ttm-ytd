

import {Input} from '@chakra-ui/react';
import {sanitizeNumericString} from 'helpers/sanitizeNumericString';
import useInputKeys from 'hooks/useInputKeys';
import {useSaveSales} from 'onIndexShow/uriageshukei/hooks';
import {useEffect, useState} from 'react';

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
	const [originalValue, setOriginalValue] = useState(data);

	const inputRef = useInputKeys();

	const {mutate} = useSaveSales();

	useEffect(() => {
		if (!inputRef.current) return;

		inputRef.current.value = data ? Number(data).toLocaleString() : '';
		setOriginalValue(data);
	}, [data, inputRef]);


	return (
		<Input 
			bgColor={!hasFocus && (originalValue === '' || originalValue === undefined) ? 'gray.100' : ''}
			ref={inputRef}
			onFocus={(e) => {
				setHasFocus(true); 

				e.target.value = e.target.value.replace(/,/g, '');
				e.target.select();
			}}
			defaultValue={data ? Number(data).toLocaleString() : ''}
			onBlur={(e) => {
				if (!storeUuid) {
					return;
				}

				setHasFocus(false); 

				if (e.target.value === originalValue) {
					e.target.value = originalValue 
						? Number(originalValue).toLocaleString() 
						: String(originalValue);
					
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
					
					setOriginalValue(cleanNumericStr);
				}

			}}
	
			placeholder={originalValue ? Number(originalValue).toLocaleString() : ''}
			fontSize={'12px'}
			textAlign={'right'}
			
			width={'80px'}
			size={'sm'}
			px={1}
			
		/>

	);
}

