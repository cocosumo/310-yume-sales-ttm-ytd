import FormContainer from './FormContainer';
import ToolbarContainer from './ToolbarContainer';
import StoreSelect from './storeSelect/StoreSelect';
import YearSelect from './yearSelect/YearSelect';

export default function Toolbar() {


	return (
		<ToolbarContainer>
			<FormContainer>
				<YearSelect />
				<StoreSelect />
			</FormContainer>
		</ToolbarContainer>
	);
}