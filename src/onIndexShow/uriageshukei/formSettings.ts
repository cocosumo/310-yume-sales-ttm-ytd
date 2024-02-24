import {z} from 'zod';
import qs from 'qs';
export const formSchema = z.object({
	year: z.coerce.number(),
	store: z.string().or(z.array(z.string())),
});

export type FormType = z.infer<typeof formSchema>;

export const formDefault: FormType = {
	year: new Date().getFullYear(),
	store: [],
};

export const getFormDefault = () => {
	const params = new URLSearchParams(window.location.search);
	// Use qs to parse query string
	const query = qs.parse(params.toString()) as unknown as Partial<FormType>;

	console.log('query', query);

  
	return {
		year: query?.year ?? new Date().getFullYear(),
		store: query?.store ?? [],
	};
};