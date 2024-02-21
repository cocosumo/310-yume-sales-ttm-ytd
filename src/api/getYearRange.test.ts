
import {describe, expect, it} from '@jest/globals';
import {getYearRange} from './getYearRange';


describe('getYearRange', () => {
	it('should return array of numbers', async () => {
		const result = await getYearRange();
		expect(result).toEqual(expect.arrayContaining([expect.any(Number)]));
	});
});