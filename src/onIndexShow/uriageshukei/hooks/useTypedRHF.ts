import {useFormContext, useWatch} from 'react-hook-form';
import {type FormType} from '../formSettings';

export const useTypedForm = useFormContext<FormType>;

export const useTypedWatch = useWatch<FormType>;