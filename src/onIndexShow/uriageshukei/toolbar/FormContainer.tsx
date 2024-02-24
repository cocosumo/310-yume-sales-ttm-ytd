import {HStack} from '@chakra-ui/react';
import {type ReactNode} from 'react';
import {Form, FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formSchema, getFormDefault} from '../formSettings';
import {DevTool} from '@hookform/devtools';
import {useSaveToQueryParams} from '../hooks';

export default function FormContainer({
	children,  
}: {
	children: ReactNode;
}) {
	const formMethods = useForm({
		defaultValues: getFormDefault(),
		resolver: zodResolver(formSchema),
	});

	useSaveToQueryParams(formMethods);

	return (
		<FormProvider {...formMethods}>
			<Form>
				<HStack spacing={8}>
					{children}
				</HStack>
			</Form>
			<DevTool 
				control={formMethods.control}
				placement={'bottom-right'}
			/>
		</FormProvider>
	);
}