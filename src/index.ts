import onIndexShow from "onIndexShow";

(() => {

  kintone.events.on([
    'app.record.index.show',
  ], onIndexShow);

  
})();