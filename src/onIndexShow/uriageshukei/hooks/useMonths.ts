// Numbers from 9 to 12 and 1 to 9
const months = [
	...Array.from({length: 4}, (_, i) => i + 9),
	...Array.from({length: 8}, (_, i) => i + 1),
];

export const monthKeys = months.map((m) => `${m}月` );

export const useMonths = () => months;
export const useMonthKeys = () => monthKeys;