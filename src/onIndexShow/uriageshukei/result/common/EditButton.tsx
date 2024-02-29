import {Controller} from 'react-hook-form';
import {useTypedForm, useTypedWatch} from '../../hooks/useTypedRHF';
import {Button, Spinner, Tooltip} from '@chakra-ui/react';
import {FaRegEdit} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import {type FormType} from 'onIndexShow/uriageshukei/formSettings';
import {useIsFetching} from '@tanstack/react-query';

const EditButtonIcon = ({
	isEditting,
}: {
	isEditting: boolean;
}) => {
	const isFetching = useIsFetching();

	if (isFetching) return <Spinner size={'xs'} />;

	if (isEditting) return <FaCheck />;
	return <FaRegEdit />;
};

const ButtonText = ({
	isEditting,
}: {
	isEditting: boolean;
}) => {
	const isFetching = useIsFetching();

	if (isFetching) return '通信中...';

	if (isEditting) return '編集終了';
	return '編集';
};

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
						leftIcon={<EditButtonIcon isEditting={field.value} />}
					>
						<ButtonText isEditting={field.value} />
					</Button>
				</Tooltip>
			)}
		/>
	);
}