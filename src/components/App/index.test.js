const React = require("react");
const renderer = require("react-test-renderer");

const App = require(".");

describe("App", () => {
  test("It renders", () => {
    const scrollyteller = { panels: [] };
    const component = renderer.create(<App scrollyteller={scrollyteller} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
