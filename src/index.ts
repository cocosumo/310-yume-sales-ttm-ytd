import onIndexShow from './onIndexShow/onIndexShow';

(() => {

	kintone.events.on([
		'app.record.index.show',
	], onIndexShow);

  
})();