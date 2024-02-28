import renderUriageShukei from './uriageshukei/renderUriageShukei';

type EventParams = {
	appId: number;
	viewId: number;
};

export default function onIndexShow(event: EventParams) {
	const {
		viewId,
	} = event;

	switch (viewId) {
		case 6345418:
		case 6345478: // 本番
			renderUriageShukei();
			break;
		default:
	}
}