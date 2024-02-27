import {HStack} from '@chakra-ui/react';
import ToolbarContainer from './ToolbarContainer';
import StoreSelect from './storeSelect/StoreSelect';
import YearSelect from './yearSelect/YearSelect';
import PrintButton from './PrintButton';

export default function Toolbar() {


	return (
		<ToolbarContainer>
			<HStack>
				<YearSelect />
				<StoreSelect />
			</HStack>
			<PrintButton />
		</ToolbarContainer>
	);
}