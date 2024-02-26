import {type UseFormReturn} from 'react-hook-form';
import {type FormType} from '../formSettings';
import {useEffect} from 'react';
import qs from 'qs';


export const useSaveToQueryParams = (formMethods: UseFormReturn<FormType>) => {

	const {
		watch, 
		handleSubmit,
	} = formMethods;

	const onSubmit = (data: FormType) => {
		const queryStr = qs.stringify(data);
		console.log('queryStr', queryStr);

		const url = new URL(window.location.href);
		url.search = queryStr;
		window.history.pushState({}, '', url.toString());
    
	};  


	// https://stackoverflow.com/a/70119332
	useEffect(() => {
		const subscription = watch(async () => handleSubmit(onSubmit)());

		return () => {
			subscription.unsubscribe(); 
		};
	}, [watch, handleSubmit]);

};