import {HStack} from '@chakra-ui/react';
import {type ReactNode} from 'react';
import {Form, FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formDefault, formSchema} from '../formSettings';
import {DevTool} from '@hookform/devtools';

export default function FormContainer({
	children,  
}: {
	children: ReactNode;
}) {
	const formMethods = useForm({
		defaultValues: formDefault,
		resolver: zodResolver(formSchema),
	});

	console.log(process.env.NODE_ENV);
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