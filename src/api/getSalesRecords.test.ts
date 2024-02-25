import {describe} from '@jest/globals';
import {getSalesRecords} from './getSalesRecords';

describe('getSalesRecords', () => {
	test('should get sales records', async () => {
		const result = await getSalesRecords({
			start: '2021-09-01',
			end: '2024-08-01',
		});
		console.log('result', result);
		expect(result).toBeDefined();
	});
});