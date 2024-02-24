import {z} from 'zod';

export const formSchema = z.object({
	year: z.number(),
	store: z.string().or(z.array(z.string())),
});

export type FormType = z.infer<typeof formSchema>;

export const formDefault: FormType = {
	year: new Date().getFullYear(),
	store: [],
};