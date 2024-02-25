import {describe} from '@jest/globals';
import {getActualDateFromFiscalDate} from './getActualDateFromFiscalDate';

describe('getActualDateFromFiscalDate', () => {
	const testCases = [
		{fiscalYear: 2024, month: 3, expected: '2023-03-01'},
		{fiscalYear: 2024, month: 9, expected: '2024-09-01'},
		{fiscalYear: 2023, month: 12, expected: '2023-12-01'},
	];

	testCases.forEach(({fiscalYear, month, expected}) => {
		it(`should return ${expected} for ${fiscalYear}-${month}`, () => {
			expect(getActualDateFromFiscalDate({fiscalYear, month})).toBe(expected);
		});
	});

});