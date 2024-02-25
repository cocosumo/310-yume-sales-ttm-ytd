// Numbers from 9 to 12 and 1 to 9
export const months = [
	...Array.from({length: 4}, (_, i) => i + 9),
	...Array.from({length: 8}, (_, i) => i + 1),
];

export const useMonths = () => months;