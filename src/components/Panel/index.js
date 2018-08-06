const React = require('react');

const styles = require('./styles.scss');

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);

    this.isLandscape = window.innerWidth > window.innerHeight;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    if (!this.base) return;
    if (!this.props.nodes) return;

    this.props.nodes.forEach(node => {
      this.base.appendChild(node);
    });

    this.props.reference(this.base);
  }

  componentWillUnmount() {
    if (!this.base) return;
    if (!this.props.nodes) return;

    this.props.nodes.forEach(node => {
      if (this.base.contains(node)) {
        this.base.removeChild(node);
      }
    });
  }

  onResize() {
    this.isLandscape = window.innerWidth > window.innerHeight;
    this.forceUpdate();
  }

  render() {
    const { config } = this.props;

    const c = this.props.className.trim();

    const className = [
      c === '' ? styles.base : c,
      config.light ? styles.light : null,
      typeof config.align !== 'undefined' ? styles[config.align] : null
    ]
      .filter(c => c)
      .join(' ');

    let elephant;
    let src;
    let stick;
    if (config.fact && config.pageNumber > 2) {
      let elephantStyle = {
        maxWidth: 'initial',
        width: this.isLandscape ? '40%' : '90%',
        position: 'absolute',
        bottom: this.isLandscape ? '0' : '7%',
        transform: 'translateY(-50%)',
        zIndex: 1
      };

      switch (config.pageNumber % 3) {
        case 0:
          elephantStyle.right = '0px';
          src = require('../Book/elephant1.png');
          stick = 'stickRight';
          break;
        case 1:
          elephantStyle.left = '0px';
          src = require('../Book/elephant2.png');
          stick = 'stickLeft';
          break;
        case 2:
          elephantStyle.right = '0px';
          src = require('../Book/elephant3.png');
          stick = 'stickRight';
          break;
      }

      elephant = <img src={src} style={elephantStyle} />;
    }

    return (
      <div className={styles.wrapper}>
        <div id={this.props.id} className={`${className} ${config.fact ? styles.fact : ''}`}>
          <div ref={el => (this.base = el)} />
          {config.fact && <div className={`${styles.stick} ${styles[stick]}`} />}
        </div>
        {elephant}
      </div>
    );
  }
}

Panel.defaultProps = {
  config: {}
};

module.exports = Panel;
