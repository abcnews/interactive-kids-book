const React = require("react");
const Scrollyteller = require("@abcnews/scrollyteller");
const Book = require("../Book");
const Panel = require("../Panel");

const styles = require("./styles.scss").default;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onMarker = this.onMarker.bind(this);

    this.state = {
      config: {},
    };
  }

  onMarker(marker) {
    let config = {
      pageNumber: marker.pageNumber,
    };

    this.setState(() => ({ config }));
  }

  componentDidMount() {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    sleep(1000).then(() => {
      if (window.scrollY < 4) {
        const offsetString = getComputedStyle(
          document.querySelector(".Main")
        ).getPropertyValue("--Main-offsetTop");

        const offsetNumber = parseInt(offsetString, 10);

        if (typeof offsetNumber !== "number") return;

        window.scrollTo({ top: offsetNumber, left: 0, behavior: "smooth" });
      }
    });
  }

  render() {
    const { scrollyteller } = this.props;
    const { config } = this.state;

    return (
      <div className={styles.root}>
        <Scrollyteller
          config={{ waypoint: 95 }}
          panels={scrollyteller.panels}
          className={`Block is-richtext is-piecemeal ${styles.scrollyteller}`}
          panelComponent={Panel}
          onMarker={this.onMarker}
        >
          <Book pages={scrollyteller.panels} pageNumber={config.pageNumber} />
        </Scrollyteller>
      </div>
    );
  }
}

module.exports = App;
