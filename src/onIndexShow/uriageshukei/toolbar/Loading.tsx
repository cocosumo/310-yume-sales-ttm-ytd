import {ScaleFade, Spinner} from '@chakra-ui/react';
import {useIsFetching} from '@tanstack/react-query';

export default function Loading() {

	const isFetching = useIsFetching();

	return (
		<ScaleFade initialScale={0.1} in={Boolean(isFetching)}>
			<Spinner />

		</ScaleFade>
	);
}