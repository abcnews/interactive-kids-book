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

let pageNumber = 1;
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

scrollyteller.panels = [
  {
    id: -1,
    config: {
      page: 'title',
      pageNumber: 1
    },
    nodes: []
  }
].concat(scrollyteller.panels);

// inject the title page image
let img = document.createElement('img');
img.src = require('./components/Book/Images/map.png');
scrollyteller.panels[1].nodes = [img].concat(scrollyteller.panels[1].nodes);
scrollyteller.panels[1].config.hideBackground = true;

// inject the end image
let endImg = document.createElement('img');
endImg.src = require('./the-end.png');
let lastIndex = scrollyteller.panels.length - 1;
scrollyteller.panels[lastIndex].nodes = [endImg].concat(scrollyteller.panels[lastIndex].nodes);
scrollyteller.panels[lastIndex].config.hideBackground = true;

function init() {
  const App = require('./components/App');
  render(<App scrollyteller={scrollyteller} />, scrollyteller.mountNode);
}

if (window.__ODYSSEY__) {
  init();
} else {
  window.addEventListener('odyssey:api', init);
}
