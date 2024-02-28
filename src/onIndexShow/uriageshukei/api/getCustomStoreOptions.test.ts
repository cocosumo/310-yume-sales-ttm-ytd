import {describe, expect, it} from '@jest/globals';
import {getCustomStoreOptions} from './getCustomStoreOptions';

describe('getCustomStoreOptions', () => {
	it('should return records', async () => {
		const result = await getCustomStoreOptions();

		console.log(result);

		expect(Array.isArray(result)).toBe(true);
		expect(result[0]).toHaveProperty('label');
	});
});