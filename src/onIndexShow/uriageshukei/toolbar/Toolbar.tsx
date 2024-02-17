import {Card, CardBody, Text} from '@chakra-ui/react';

export default function Toolbar() {
	return (
		<Card
			width={'100%'}
		>
			<CardBody>
				<Text>View a summary of all your customers over the last month.</Text>
			</CardBody>
		</Card>
	);
}