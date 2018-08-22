const React = require('react');
const Scrollyteller = require('@abcnews/scrollyteller');
const Book = require('../Book');
const Panel = require('../Panel');

const styles = require('./styles.scss');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onMarker = this.onMarker.bind(this);

    this.state = {
      config: {}
    };
  }

  onMarker(marker) {
    let config = {
      pageNumber: marker.pageNumber
    };

    this.setState(() => ({ config }));
  }

  render() {
    const { scrollyteller } = this.props;
    const { config } = this.state;

    return (
      <div className={styles.root}>
        {/* <a href="/news/" className={styles.logo}>
          <img src={require('./logo.svg')} alt="ABC News homepage" />
        </a> */}
        <Scrollyteller
          config={{ waypoint: 95 }}
          panels={scrollyteller.panels}
          className={`Block is-richtext is-piecemeal ${styles.scrollyteller}`}
          panelComponent={Panel}
          onMarker={this.onMarker}>
          <Book pages={scrollyteller.panels} pageNumber={config.pageNumber} />
        </Scrollyteller>
      </div>
    );
  }
}

module.exports = App;
