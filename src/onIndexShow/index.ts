import renderUriageShukei from "./uriageshukei";

interface EventParams {
  appId: number;
  viewId: number;
}

export default function onIndexShow(event: EventParams) {
  const {
    viewId,
  } = event;

  switch (viewId) {
    case 6345418:
      renderUriageShukei();
      break;
  }
}