

import {Input} from '@chakra-ui/react';
import useEnterKeyAsTab from 'hooks/useEnterKeyAsTab';
import {useSaveSales, useStoreUuidByRecId} from 'onIndexShow/uriageshukei/hooks';
import {useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';

export default function InputEditable({
	year,
	month,
	data = 0,
}: {
	year: number;
	month: number;
	data?: number;
}) {
	
	const [hasFocus, setHasFocus] = useState(false);  

	const [value, setValue] = useState<number | ''>(data);
	const inputRef = useEnterKeyAsTab();
	const {mutate} = useSaveSales();
	const {data: storeUuid} = useStoreUuidByRecId();

	const saveNewValue = useMemo(
		() => debounce(
			(newValue: number | string) => {
				if (!storeUuid) {
					return;
				}

				mutate({
					fiscalYear: year,
					month,
					newSalesAmount: Number(newValue),
					storeUuid,
				});
			}, 
			300,
		), [
			year,
			month,
			mutate,
			storeUuid,
		]);


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
				setHasFocus(false); 
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
				saveNewValue(valueToSave);
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

