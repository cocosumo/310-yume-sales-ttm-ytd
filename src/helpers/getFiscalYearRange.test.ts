import {getFiscalYearRange} from './getFiscalYearRange';

describe('getFiscalYearRange', () => {
	it('should return 2022-09-01 and 2023-08-01 for 2022', () => {
		expect(getFiscalYearRange(2022)).toEqual({
			start: '2022-09-01',
			end: '2023-08-01',
		});
	});
});