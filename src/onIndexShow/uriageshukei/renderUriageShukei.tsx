import {createRoot} from 'react-dom/client';
import UriageShukei from './UriageShukei';



export default function renderUriageShukei() {
	const rootEl = document.getElementById('root');
	if (!rootEl) {
		return;
	}

	console.log('render');
	const root = createRoot(rootEl);
	root.render(<UriageShukei />);
	console.log('This is the "UriageShukei" view');
}