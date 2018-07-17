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
    console.log('Marker', marker);

    let config = {
      page: marker.page
    };

    this.setState(() => ({ config }));
  }

  render() {
    const { scrollyteller } = this.props;

    return (
      <div className={styles.root}>
        <Scrollyteller
          panels={scrollyteller.panels}
          className={`Block is-richtext is-piecemeal`}
          panelClassName={`Block-content u-layout u-richtext`}
          onMarker={this.onMarker}>
          <Book page={this.state.config.page} />
        </Scrollyteller>
      </div>
    );
  }
}

module.exports = App;
