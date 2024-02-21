import {describe} from '@jest/globals';
import {getStores} from './getStores';

describe('getStores', () => {
	it('should return array of stores', async () => {
		const result = await getStores();
		console.log(result);

		expect(result).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					sortNumber: expect.any(Object),
				}),
			]),
		);
	});
});
