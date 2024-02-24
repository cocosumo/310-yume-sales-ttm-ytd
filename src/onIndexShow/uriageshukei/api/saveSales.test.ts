import {describe} from '@jest/globals';
import {saveSales} from './saveSales';

describe('saveSales', () => {
	test('should save sales', async () => {
		const result = await saveSales({
			year: 2024, 
			month: 3, 
			newSalesAmount: 303000,
		});

		console.log('result', result);
		expect(result).toBeDefined();

	});
});