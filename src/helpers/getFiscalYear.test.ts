import {getFiscalYear} from './getFiscalYear';

describe('getFiscalYear', () => {

	const testCases = [
		{date: '2023-07-10', expected: 2022},
		{date: '2023-08-10', expected: 2022},
		{date: '2023-09-10', expected: 2023},
		{date: '2023-12-10', expected: 2023},
		{date: '2024-01-10', expected: 2023},
		{date: '2024-07-10', expected: 2023},
		{date: '2024-08-10', expected: 2023},
		{date: '2024-09-10', expected: 2024},
	];

	testCases.forEach(({date, expected}) => {
		it(`should return ${expected} for ${date}`, () => {
			const d = new Date(date);
			expect(getFiscalYear(d)).toBe(expected);
		});
	});
});