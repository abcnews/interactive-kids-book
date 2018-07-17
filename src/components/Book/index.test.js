const React = require('react');
const renderer = require('react-test-renderer');

const Book = require('.');

describe('Book', () => {
  test('It renders', () => {
    const component = renderer.create(<Book />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
