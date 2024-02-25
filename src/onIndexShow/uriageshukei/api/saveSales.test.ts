import {describe} from '@jest/globals';
import {saveSales} from './saveSales';

describe('saveSales', () => {
	test('should save sales', async () => {
		const result = await saveSales({
			fiscalYear: 2024, 
			month: 3, 
			newSalesAmount: 30000,
		});

		console.log('result', result);
		expect(result).toBeDefined();

	});
});