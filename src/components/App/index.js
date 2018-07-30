const React = require('react');
const Scrollyteller = require('@abcnews/scrollyteller');
const Book = require('../Book');

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
      pageNumber: marker.pageNumber,
      isFact: marker.fact === true
    };

    this.setState(() => ({ config }));
  }

  render() {
    const { scrollyteller } = this.props;
    const { config } = this.state;

    return (
      <div className={styles.root}>
        <Scrollyteller
          panels={scrollyteller.panels}
          className={`Block is-richtext is-piecemeal ${styles.scrollyteller}`}
          panelClassName={`Block-content u-layout u-richtext ${styles.panel}`}
          onMarker={this.onMarker}>
          <Book pages={scrollyteller.panels} pageNumber={config.pageNumber} isFact={config.isFact} />
        </Scrollyteller>
      </div>
    );
  }
}

module.exports = App;
