import {Th, Thead, Tr} from '@chakra-ui/react';
import {useMonths} from './useMonths';

export const InputTHead = () => {
	const months = useMonths();

	return (
		<Thead>
			<Tr>
				<Th />
				{
					months.map((month) => (
						<Th key={month} textAlign={'center'}>
							{month}月
						</Th>
					))
				}
				<Th textAlign={'center'}>合計</Th>
			</Tr>
		</Thead>
	);
};