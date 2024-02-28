import {Controller} from 'react-hook-form';
import {useTypedForm} from './useTypedRHF';
import {Button} from '@chakra-ui/react';
import {FaRegEdit} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';

export default function EditButton() {
	const {control} = useTypedForm();

	return (
		<Controller
			control={control}
			name={'editMode'}
			render={({
				field,
			}) => (
				<Button
					sx={{
						'@media print': {
							display: 'none',
						},
					}}
					colorScheme={field.value ? 'green' : 'gray'}
					size={'sm'}
					onClick={() => {
						field.onChange(!field.value);
					}}
					leftIcon={field.value ? <FaCheck /> : <FaRegEdit />}
				>
					{field.value ? '編集終了' : '編集開始'}
				</Button>
			)}
		/>
	);
}