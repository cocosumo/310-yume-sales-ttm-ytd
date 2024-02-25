

import {Input} from '@chakra-ui/react';
import {useDebounce} from '@uidotdev/usehooks';
import useEnterKeyAsTab from 'hooks/useEnterKeyAsTab';
import {useSaveSales} from 'onIndexShow/uriageshukei/hooks';
import {useEffect, useState} from 'react';

export default function InputEditable({
	year,
	month,
}: {
	year: number;
	month: number;
}) {
	const [isDirty, setIsDirty] = useState(false);
	const [hasFocus, setHasFocus] = useState(false);  
	const [value, setValue] = useState<number | ''>('');
	const inputRef = useEnterKeyAsTab();
	const {mutate} = useSaveSales();
	const debouncedValue = useDebounce(value, 1000);

	useEffect(() => {
		if (!isDirty) {
			return;
		}

		mutate({
			year,
			month,
			newSalesAmount: Number(debouncedValue),
		});
	}, [debouncedValue, isDirty, mutate, month, year]);

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
				console.log('fire');
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

				setIsDirty(true);

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

