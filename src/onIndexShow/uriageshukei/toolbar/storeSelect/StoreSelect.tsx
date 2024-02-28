import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {useStoreOptions} from './useStoreOptions';
import {useCustomStoreOptions, useTypedForm} from 'onIndexShow/uriageshukei/hooks';
import {Controller} from 'react-hook-form';

export default function StoreSelect() {

	const {control, setValue} = useTypedForm();

	const {data} = useStoreOptions();
	const {data: customStoreOptions} = useCustomStoreOptions();

	return (
		<Controller 
			control={control}
			name='store'
			render={({
				field,
				formState : {
					errors,
				},
			}) => (
				<FormControl 
					size={'sm'} 
					width={'200px'} 
					orientation='horizontal'
					isInvalid={Boolean(errors.store)}

				>
					<FormLabel>店舗</FormLabel>
					<Select 
						{...field} 
						placeholder='全店舗' 
						variant='filled'
						onChange={(e) => {
							const newValue = e.target.value;
							if (newValue.includes('custom') || !newValue) {
								setValue('editMode', false);
							}

							field.onChange(e);
						}}
					>
						{data?.map((store) => (
							<option key={store.label} value={store.recordId}>{store.label}</option>
						))}
						<option value={'custom-all'}>全店舗個別表示</option>

						{customStoreOptions?.map((store) => (
							<option key={store.label} value={`custom-${store.label}`}>{store.label}</option>
						))}
					</Select>

				</FormControl>
			)}
		/>
	);
}