const React = require('react');
const { render } = require('react-dom');

const PROJECT_NAME = 'interactive-kids-book';
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const scrollyteller = require('@abcnews/scrollyteller').loadOdysseyScrollyteller('book', 'u-full', 'mark');
const styles = require('./styles.scss');

let pageNumber = 0;
scrollyteller.panels = scrollyteller.panels.map(panel => {
  if (panel.config.fact) {
    if (panel.id > 1) {
      panel.config.page = scrollyteller.panels[panel.id - 1].config.page;
    }
    panel.config.align = 'center';
    panel.config.pageNumber = pageNumber;
    panel.className = styles.factPanel;
  } else {
    panel.config.pageNumber = ++pageNumber;
  }
  return panel;
});

function init() {
  const App = require('./components/App');
  render(<App scrollyteller={scrollyteller} />, scrollyteller.mountNode);
}

init();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      init();
    } catch (err) {
      const ErrorBox = require('./components/ErrorBox');
      render(<ErrorBox error={err} />, root);
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}
