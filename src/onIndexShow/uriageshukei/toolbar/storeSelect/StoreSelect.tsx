import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {useStoreOptions} from './useStoreOptions';
import {useTypedForm} from 'onIndexShow/uriageshukei/hooks';
import {Controller} from 'react-hook-form';

export default function StoreSelect() {

	const {control} = useTypedForm();

	const {data} = useStoreOptions();

	return (
		<Controller 
			control={control}
			name='store'
			render={({
				field,
			}) => (
				<FormControl 
					size={'sm'} 
					width={'200px'} 
					orientation='horizontal'
					{...field}
				>
					<FormLabel>店舗</FormLabel>
					<Select placeholder='全店舗' variant='filled'>
						{data?.map((store) => (
							<option key={store.recordId} value={store.recordId}>{store.label}</option>
						))}
					</Select>

				</FormControl>
			)}
		/>
	);
}