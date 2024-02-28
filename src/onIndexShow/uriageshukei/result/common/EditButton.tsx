import {Controller} from 'react-hook-form';
import {useTypedForm, useTypedWatch} from '../../hooks/useTypedRHF';
import {Button, Tooltip} from '@chakra-ui/react';
import {FaRegEdit} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';

export default function EditButton() {
	const selectedStore = useTypedWatch({
		name: 'store',
	}) as FormType['store'];

	const isDisabled = !selectedStore || selectedStore.includes('custom');
	const {control} = useTypedForm();

	return (
		<Controller
			control={control}
			name={'editMode'}
			render={({
				field,
			}) => (
				<Tooltip
					label={isDisabled ? '個別店舗の表示時のみ編集可能' : '編集モードを切り替えます'}
				>
					<Button
						sx={{
							'@media print': {
								display: 'none',
							},
						}}
						colorScheme={field.value ? 'green' : 'gray'}
						isDisabled={isDisabled}
						size={'md'}
						onClick={() => {
							field.onChange(!field.value);
						}}
						leftIcon={field.value ? <FaCheck /> : <FaRegEdit />}
					>
						{field.value ? '編集終了' : '編集'}
					</Button>
				</Tooltip>
			)}
		/>
	);
}