

import {Input} from '@chakra-ui/react';
import useEnterKeyAsTab from 'hooks/useEnterKeyAsTab';
import {useSaveSales} from 'onIndexShow/uriageshukei/hooks';
import {useEffect, useState} from 'react';

export default function InputEditable({
	year,
	month,
	data = 0,
	storeUuid,
}: {
	year: number;
	month: number;
	data?: number;
	storeUuid?: string;
}) {
	
	const [hasFocus, setHasFocus] = useState(false);  

	const [value, setValue] = useState<number | ''>(data);
	const inputRef = useEnterKeyAsTab();
	const {mutate} = useSaveSales();

	useEffect(() => {

		setValue(data);
	}, [data]);

	return (
		<Input 
			
			ref={inputRef}
			onFocus={() => {
				setHasFocus(true); 
			}}
			onBlur={() => {
				if (!storeUuid) {
					return;
				}

				setHasFocus(false); 
				mutate({
					fiscalYear: year,
					month,
					newSalesAmount: Number(value),
					storeUuid,
				});
			}}
			onChange={(e) => {
				console.log('fire');
				const newValue = e.target.value;

				const parsedN = Number(newValue.replace(/,/g, ''));
				let valueToSave: number | '' = parsedN;

				if (isNaN(parsedN)) {
					return;
				}
        
				if (
					newValue === ''
        || isNaN(parsedN)
				) {
					valueToSave = '';
				} 

				setValue(valueToSave);
				// SaveNewValue(valueToSave);
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

