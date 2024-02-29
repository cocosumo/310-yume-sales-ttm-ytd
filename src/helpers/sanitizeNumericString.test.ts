import {describe} from '@jest/globals';
import {sanitizeNumericString} from './sanitizeNumericString';

describe('sanitizeNumericString', () => {
	const testCases = [
		{
			input: '１２３４５６７８９０',
			expected: '1234567890',
		},
		{
			input: '１２３４５６abc７８９０',
			expected: '1234567890',
		},
		{
			input: '１２３４５67８９０abc',
			expected: '1234567890',
		},
	];

	testCases.forEach(testCase => {
		it(`should sanitize ${testCase.input} to ${testCase.expected}`, () => {
			expect(sanitizeNumericString(testCase.input)).toBe(testCase.expected);
		});
	});
});