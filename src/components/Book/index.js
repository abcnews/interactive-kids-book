const React = require('react');
const styles = require('./styles.scss');

const ELEPHANT = require('./elephant.png');

const BEAR = require('./bear.png');
const BEAR_BROW = require('./bear-brow.png');

const CHICKEN = require('./chicken.png');
const CHICKEN_BACKGROUND = require('./chicken-background.jpg');
const CHICKEN_CLOSER = require('./chicken-closer.png');

const BEAR_LISTENING = require('./bear-listening.png');
const OWL = require('./owl.png');
const OWL_BACKGROUND = require('./owl-background.jpg');

const BUNNY = require('./bunny.png');
const BUNNY_BABY = require('./bunny-baby.png');
const BUNNY_BACKGROUND = require('./bunny-background.jpg');

const PIG = require('./pig.png');
const PIG_BACKGROUND = require('./pig-background.jpg');
const PIG_CLOSER = require('./pig-closer.png');

const MONKEY = require('./monkey.png');
const MONKEY_THINKING = require('./monkey-thinking.png');
const OFFICE_BACKGROUND = require('./office-background.jpg');

const FOX = require('./fox.png');
const FOX_BEHIND = require('./fox-behind.png');

const BEAR_ROAR = require('./bear-roar.png');
const ROAR_R1 = require('./r1.png');
const ROAR_O1 = require('./o1.png');
const ROAR_A1 = require('./a1.png');
const ROAR_A2 = require('./a2.png');
const ROAR_R2 = require('./r2.png');
const ROAR_R3 = require('./r3.png');
const ROAR_BANG = require('./bang.png');

const BEAR_BOX = require('./bear-box.png');

const BEAR_TYPING = require('./bear-typing.png');
const TYPE_1 = require('./type1.png');
const TYPE_2 = require('./type2.png');

const TRANSFORM_PAGE_IN = `scale(1, 1)`;
const TRANSFORM_PAGE_OUT = `scale(0, 1.5)`;

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.pages = props.pages.map(page => {
      let align = 'center';
      if (page.config.align === 'right') {
        align = 'left';
      } else if (page.config.align === 'left') {
        align = 'right';
      }

      return {
        key: page.id,
        fact: page.config.fact,
        align,
        pageNumber: page.config.pageNumber,
        identifier: page.config.page,
        render: this['_' + page.config.page]
      };
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.forceUpdate();
  }

  _bear() {
    return (
      <div>
        <img src={OWL_BACKGROUND} style={{ maxWidth: 'initial', width: '1000px', left: '0px', top: '200px' }} />
        <img src={BEAR} style={{ width: '700px', bottom: '0px', left: '150px' }} />
      </div>
    );
  }

  _bearsad() {
    // TODO: sad eyes
    return (
      <div>
        <img src={OWL_BACKGROUND} style={{ maxWidth: 'initial', width: '1000px', left: '0px', top: '200px' }} />
        <img src={BEAR} style={{ width: '700px', bottom: '0px', left: '150px' }} />
        <img src={BEAR_BROW} style={{ width: '40px', top: '450px', left: '330px', transform: 'rotate(-35deg)' }} />
        <img src={BEAR_BROW} style={{ width: '40px', top: '450px', left: '550px', transform: 'rotate(35deg)' }} />
      </div>
    );
  }

  _chicken() {
    return (
      <div>
        <img src={CHICKEN_BACKGROUND} style={{ maxWidth: 'initial', width: '1000px', left: '-400px', top: '100px' }} />
        <img src={CHICKEN} style={{ width: '300px', left: '0px', bottom: '250px' }} />
        <img
          src={BEAR_LISTENING}
          style={{ width: '500px', right: '100px', bottom: '0px', transform: `scale(-1, 1) rotate(3deg)` }}
        />
      </div>
    );
  }

  _chickencloser() {
    return (
      <div>
        <img
          src={CHICKEN_BACKGROUND}
          style={{ maxWidth: 'initial', width: '1500px', left: '-300px', top: '-300px', opacity: 0.3 }}
        />
        <img src={CHICKEN_CLOSER} style={{ width: '500px', left: '150px', bottom: '100px' }} />
      </div>
    );
  }

  _owl() {
    return (
      <div>
        <img src={OWL_BACKGROUND} style={{ maxWidth: 'initial', width: '600px', left: '200px', top: '300px' }} />
        <img src={OWL_BACKGROUND} style={{ maxWidth: 'initial', width: '700px', right: '-300px', top: '300px' }} />
        <img src={OWL} style={{ maxWidth: 'initial', width: '1000px', right: '-300px', top: '50px' }} />
        <img src={BEAR_LISTENING} style={{ width: '450px', left: '0px', bottom: '0px' }} />
      </div>
    );
  }

  _bunny() {
    return (
      <div>
        <img src={BUNNY_BACKGROUND} style={{ maxWidth: 'initial', width: '1100px', left: '-100px', top: '0px' }} />
        <img
          src={BUNNY_BABY}
          className={styles.babyBunny3}
          style={{ width: '140px', left: '480px', bottom: '300px', opacity: 0.9 }}
        />
        <img src={BUNNY} style={{ width: '400px', left: '100px', bottom: '200px' }} />
        <img src={BUNNY_BABY} className={styles.babyBunny1} style={{ width: '180px', left: '0px', bottom: '50px' }} />
        <img
          src={BUNNY_BABY}
          className={styles.babyBunny2}
          style={{ width: '180px', left: '500px', bottom: '150px' }}
        />
      </div>
    );
  }

  _pig() {
    return (
      <div>
        <img src={PIG_BACKGROUND} style={{ maxWidth: 'initial', width: '1200px', right: '-300px', top: '100px' }} />
        <img src={PIG} style={{ width: '400px', right: '0px', bottom: '200px' }} />
      </div>
    );
  }

  _pigcloser() {
    return (
      <div>
        <img
          src={PIG_BACKGROUND}
          style={{ maxWidth: 'initial', width: '1400px', right: '-200px', top: '-100px', opacity: 0.3 }}
        />
        <img src={PIG_CLOSER} style={{ width: '600px', left: '200px', bottom: '50px' }} />
      </div>
    );
  }

  _monkey() {
    return (
      <div>
        <img
          src={OFFICE_BACKGROUND}
          style={{ maxWidth: 'initial', width: '1200px', right: '-250px', bottom: '300px' }}
        />
        <img src={MONKEY} className={styles.monkey} style={{ width: '500px', right: '-150px', top: '550px' }} />
        <img src={BEAR_LISTENING} style={{ width: '450px', left: '0px', bottom: '0px' }} />
      </div>
    );
  }

  _monkeythinking() {
    return (
      <div>
        <img
          src={OFFICE_BACKGROUND}
          style={{ maxWidth: 'initial', width: '2000px', right: '-600px', bottom: '400px', opacity: 0.3 }}
        />
        <img src={MONKEY_THINKING} style={{ width: '500px', right: '0px', top: '100px' }} />
      </div>
    );
  }

  _fox() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{ maxWidth: 'initial', width: '1000px', right: '-200px', bottom: '300px', opacity: 0.4 }}
        />
        <img src={FOX} style={{ width: '500px', bottom: '0px', right: '0px' }} />
      </div>
    );
  }

  _foxcloser() {
    return (
      <div>
        <img src={OWL_BACKGROUND} style={{ maxWidth: 'initial', width: '1000px', left: '0px', top: '100px' }} />
        <img src={BEAR} style={{ width: '500px', bottom: '200px', left: '150px' }} />
        <img src={BEAR_BROW} style={{ width: '35px', top: '460px', left: '280px', transform: 'rotate(5deg)' }} />
        <img src={BEAR_BROW} style={{ width: '35px', top: '460px', left: '430px', transform: 'rotate(-5deg)' }} />
        <img src={FOX_BEHIND} style={{ width: '400px', bottom: '50px', left: '350px' }} />
      </div>
    );
  }

  _roaring() {
    return (
      <div>
        <div style={{ position: 'absolute', top: '150px', left: '150px', width: '690px', height: '200px' }}>
          <img src={ROAR_R1} className={styles.jiggle1} style={{ width: '180px', top: '40px', left: '0px' }} />
          <img src={ROAR_O1} className={styles.jiggle2} style={{ width: '120px', top: '20px', left: '140px' }} />
          <img src={ROAR_A1} className={styles.jiggle3} style={{ width: '80px', top: '5px', left: '260px' }} />
          <img src={ROAR_A2} className={styles.jiggle1} style={{ width: '90px', top: '0px', left: '340px' }} />
          <img src={ROAR_R2} className={styles.jiggle3} style={{ width: '100px', top: '0px', left: '440px' }} />
          <img src={ROAR_R3} className={styles.jiggle2} style={{ width: '100px', top: '10px', left: '540px' }} />
          <img src={ROAR_BANG} className={styles.jiggle1} style={{ width: '60px', top: '20px', left: '630px' }} />
        </div>
        <img src={BEAR_ROAR} style={{ width: '1000px', bottom: '-400px', left: '0px' }} />
      </div>
    );
  }

  _bearbox() {
    return (
      <div>
        <img src={BEAR_BOX} style={{ width: '700px', left: '0', bottom: '300px', opacity: 0.9 }} />
      </div>
    );
  }

  _typing() {
    return (
      <div>
        <img src={TYPE_1} className={styles.typing1} style={{ width: '120px', top: '690px', left: '180px' }} />
        <img src={TYPE_2} className={styles.typing2} style={{ width: '120px', top: '750px', left: '160px' }} />
        <img src={BEAR_TYPING} style={{ width: '800px', bottom: '50px', left: '100px' }} />
      </div>
    );
  }

  render() {
    const { pageNumber, isFact } = this.props;

    const isLandscape = this.width > this.height;
    const scale = Math.min(this.width / 1000, this.height / 1200) - (isLandscape ? 0.1 : 0);

    return (
      <div className={styles.wrapper} style={{ width: this.width, height: this.height }}>
        {this.pages.map((page, index) => {
          const isCurrentPage = pageNumber <= page.pageNumber;

          let x = '-50%';
          if (this.width > 1100) {
            if (page.align === 'right') {
              x = '-33%';
            } else if (page.align === 'left') {
              x = '-66%';
            }
          }
          const graphicTransform = `translate(${x}, -50%) scale(${scale})`;

          return (
            <div
              key={page.key}
              className={styles.page}
              style={{
                width: this.width,
                height: this.height,
                zIndex: 100 + (this.pages.length - index),
                transform: isCurrentPage ? TRANSFORM_PAGE_IN : TRANSFORM_PAGE_OUT
              }}>
              <div className={styles.graphic} style={{ transform: graphicTransform }}>
                {page.render && page.render()}
              </div>
              <div
                className={styles.overlay}
                style={{ width: this.width, height: this.height, opacity: isCurrentPage ? 0 : 1 }}
              />
            </div>
          );
        })}

        <div
          className={`${styles.elephantBackground} ${isFact ? styles.showElephant : ''}`}
          style={{ width: this.width, height: this.height }}>
          <div
            className={styles.elephant}
            style={{ transform: `scale(${scale}) ${isFact ? 'translate(0, 0)' : 'translate(150%, 150%)'}` }}>
            <img src={ELEPHANT} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Book;
