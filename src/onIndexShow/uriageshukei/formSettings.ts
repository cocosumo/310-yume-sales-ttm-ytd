import {z} from 'zod';
import qs from 'qs';
import {getFiscalYear} from 'helpers/getFiscalYear';

export const formSchema = z.object({
	year: z.coerce.number(),
	store: z.string(),
	editMode: z.boolean(),
});


export type FormType = z.infer<typeof formSchema>;

/**
 * Default values for the form
 */
export const formDefault: FormType = {
	year: getFiscalYear(),
	store: '',
	editMode: false,
};

/**
 * Get default values from url query string
 * 
 * @returns default values for the form
 */
export const getFormDefault = (): FormType => {
	const params = new URLSearchParams(window.location.search);
	// Use qs to parse query string
	const query = qs.parse(params.toString()) as unknown as Partial<FormType>;

	return {
		year: query?.year ?? formDefault.year,
		store: query?.store ?? formDefault.store,
		editMode: formDefault.editMode,
	};
};