import {getFiscalYear} from 'helpers/getFiscalYear';
import {useSalesRecords} from './useSalesRecords';
import {useCallback} from 'react';
import {useCustomStoreOptions} from './useCustomStoreOptions';
import {useStoreUuidByRecId} from './useStoreUuidByRecId';


export type ParsedMonthRecord = Record<number, number | string>;

export type ParsedYearRecData = {
	data: ParsedMonthRecord;
	total: number;
};

export type ParsedSalesRecords = Record<number, ParsedYearRecData>;


export const useParsedSalesRecords = ({
	store,
}: {	
	store: string;
}) => {


	const {data: customStoreOptions} = useCustomStoreOptions();
	const {data: storeUuid} = useStoreUuidByRecId({store});

	return useSalesRecords<ParsedSalesRecords>({
		select: useCallback((data) => {
			const isCustom = store.includes('custom');
			const customStoreLabel = store.slice(store.indexOf('-') + 1);
			const selectedCustomStoreOption = customStoreOptions?.find((option) => option.label === customStoreLabel);
			
			return data
				.reduce<ParsedSalesRecords>((acc, cur) => {
				if (!store
				|| cur.storeUuid.value === storeUuid
				|| (isCustom && (!selectedCustomStoreOption?.data.length || selectedCustomStoreOption?.data.includes(cur.storeUuid.value)))) {

					const [year, month] = cur.salesDate.value.split('-').map(Number);
		
					const fiscalYear = getFiscalYear(new Date(year, month - 1, 1));
		
					const amount = cur.saleAmount.value;
	
					acc[fiscalYear] ||= {
						data: {
	
						},
						total: 0,
					};

					
	
					acc[fiscalYear].data[month] = amount;
					acc[fiscalYear].total += Number(amount);
				} 

				return acc;
			}, {});
		}, [store, customStoreOptions, storeUuid]),
	});
};