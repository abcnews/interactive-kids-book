const React = require('react');
const { render } = require('react-dom');

const PROJECT_NAME = 'interactive-kids-book';
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const scrollyteller = require('@abcnews/scrollyteller').loadOdysseyScrollyteller('book', 'u-full', 'mark');

scrollyteller.panels = scrollyteller.panels.map(panel => {
  panel.nodes = panel.nodes
    .map(node => {
      if (node.tagName && node.querySelector('img')) {
        panel.config.image = node.querySelector('img').src;
        return null;
      }
      return node;
    })
    .filter(n => n);

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
