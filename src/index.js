require('./styles.scss');

const React = require('react');
const { render } = require('react-dom');
const WebFont = require('webfontloader');
WebFont.load({
  google: {
    families: ['Gaegu']
  }
});

const scrollyteller = require('@abcnews/scrollyteller').loadOdysseyScrollyteller('book', 'u-full', 'mark');

let pageNumber = 0;
scrollyteller.panels = scrollyteller.panels.map(panel => {
  if (panel.config.fact) {
    if (panel.id > 1) {
      panel.config.page = scrollyteller.panels[panel.id - 1].config.page;
    }
    panel.config.align = 'center';
    panel.config.pageNumber = pageNumber;
  } else {
    panel.config.pageNumber = ++pageNumber;
  }
  return panel;
});

function init() {
  const App = require('./components/App');
  render(<App scrollyteller={scrollyteller} />, scrollyteller.mountNode);
}

if (window.__ODYSSEY__) {
  init();
} else {
  window.addEventListener('odyssey:api', init);
}
