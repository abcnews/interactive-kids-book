const React = require('react');
const styles = require('./styles.scss');

const BEAR_TITLE = require('./title-bear.png');
const BEAR_TITLE_BLINKING = require('./title-bear-blinking.png');

const ELEPHANT = require('./elephant.png');
const ELEPHANT2 = require('./elephant2.png');
const ELEPHANT3 = require('./elephant3.png');

const BEAR = require('./bear.png');
const BEAR_SAD = require('./bear-sad.png');
const BEAR_EYES_ANGRY = require('./bear-angry-eyes.png');

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
    this.isLandscape = this.width > this.height;

    this.pages = props.pages.map(page => {
      let align = 'center';
      if (page.config.align === 'right') {
        align = 'left';
      } else if (page.config.align === 'left') {
        align = 'right';
      }

      this['_' + page.config.page] = this['_' + page.config.page].bind(this);

      return {
        key: page.id,
        page: page.config.page,
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
    this.isLandscape = this.width > this.height;
    this.forceUpdate();
  }

  _title() {
    let titleWidth;
    let titleTop;
    if (this.isLandscape) {
      if (this.width < 916) {
        titleTop = '-28%';
        titleWidth = this.width / 916 - 0.2;
      } else {
        titleTop = '10%';
        titleWidth = 1;
      }
    } else {
      titleTop = '5%';
      titleWidth = this.width / 916 - 0.05;
    }

    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '130%' : 'initial',
            height: this.isLandscape ? 'initial' : '101%',
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
        <div className={styles.titlePage} />
        <div
          style={{
            position: 'absolute',
            width: '916px',
            height: '474px',
            top: titleTop,
            left: '50%',
            transform: `translateX(-50%) scale(${titleWidth})`
          }}>
          <img className={styles.float1} src={require('./title-word-bear.png')} style={{ left: '0px', top: '0px' }} />
          <img
            className={styles.float2}
            src={require('./title-word-finds.png')}
            style={{ left: '516px', top: '43px' }}
          />
          <img className={styles.float3} src={require('./title-word-a.png')} style={{ left: '182px', top: '233px' }} />
          <img
            className={styles.float4}
            src={require('./title-word-voice.png')}
            style={{ left: '340px', top: '224px' }}
          />
        </div>
        <img
          src={BEAR_TITLE}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '50%' : '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '0px'
          }}
        />
        <img
          src={BEAR_TITLE_BLINKING}
          className={styles.blinking}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '50%' : '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '0px'
          }}
        />
      </div>
    );
  }

  _bear() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '10%' : '30%'
          }}
        />
        <img
          src={BEAR}
          style={{
            width: this.isLandscape ? 'initial' : '90%',
            height: this.isLandscape ? '70%' : 'initial',
            bottom: '3%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    );
  }

  _bearsad() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '10%' : '30%'
          }}
        />
        <img
          src={BEAR_SAD}
          style={{
            width: this.isLandscape ? 'initial' : '90%',
            height: this.isLandscape ? '70%' : 'initial',
            bottom: '3%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    );
  }

  _chicken() {
    return (
      <div>
        <img
          src={CHICKEN_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '70%' : 'initial',
            height: this.isLandscape ? 'initial' : '70%',
            left: this.isLandscape ? '30%' : '34%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '25%' : '40%'
          }}
        />
        <img
          src={CHICKEN}
          style={{
            width: this.isLandscape ? '12%' : 'initial',
            height: this.isLandscape ? 'initial' : '15%',
            left: this.isLandscape ? '20%' : '25%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '25%' : '35%'
          }}
        />
        <img
          src={BEAR_LISTENING}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: this.isLandscape ? '50%' : '40%',
            bottom: '4%',
            transform: `scale(-1, 1) rotate(3deg)`
          }}
        />
      </div>
    );
  }

  _chickencloser() {
    return (
      <div>
        <img
          src={CHICKEN_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '110%',
            left: this.isLandscape ? '40%' : '34%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '30%' : '40%',
            opacity: 0.4
          }}
        />
        <img
          src={CHICKEN_CLOSER}
          style={{
            width: this.isLandscape ? '30%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '40%' : '50%',
            transform: 'translateX(-50%)',
            bottom: '5%'
          }}
        />
      </div>
    );
  }

  _owl() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: '40%',
            transform: 'translateX(-50%) scale(-1, 1)',
            bottom: '30%',
            opacity: 0.5
          }}
        />
        <img
          src={OWL}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '60%' : 'initial',
            height: this.isLandscape ? 'initial' : '100%',
            left: '90%',
            transform: 'translateX(-50%)',
            bottom: '5%'
          }}
        />
        <img
          src={BEAR_LISTENING}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '30%' : '0%',
            transform: 'translateX(-50%)',
            bottom: '-5%'
          }}
        />
      </div>
    );
  }

  _pig() {
    return (
      <div>
        <img
          src={PIG_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: this.isLandscape ? '50%' : '40%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '10%' : '30%'
          }}
        />
        <img
          src={PIG}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '70%' : '70%',
            transform: 'translateX(-50%)',
            bottom: '10%'
          }}
        />
      </div>
    );
  }

  _pigcloser() {
    return (
      <div>
        <img
          src={PIG_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: this.isLandscape ? '50%' : '50%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '10%' : '30%'
          }}
        />
        <img
          src={PIG_CLOSER}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '65%' : '50%',
            transform: 'translateX(-50%)',
            bottom: '10%'
          }}
        />
      </div>
    );
  }

  _bunny() {
    return (
      <div>
        <img
          src={BUNNY_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '60%' : 'initial',
            height: this.isLandscape ? 'initial' : '70%',
            left: this.isLandscape ? '20%' : '50%',
            transform: 'translateX(-50%)',
            bottom: '20%'
          }}
        />
        <img
          src={BUNNY_BABY}
          className={styles.babyBunny3}
          style={{
            width: this.isLandscape ? '8%' : 'initial',
            height: this.isLandscape ? 'initial' : '10%',
            left: this.isLandscape ? '30%' : '50%',
            bottom: '30%',
            opacity: 0.9
          }}
        />

        <img
          src={BUNNY}
          style={{
            width: this.isLandscape ? '22%' : 'initial',
            height: this.isLandscape ? 'initial' : '50%',
            left: this.isLandscape ? '20%' : '20%',
            transform: 'translateX(-50%)',
            bottom: '10%'
          }}
        />

        <img
          src={BUNNY_BABY}
          className={styles.babyBunny1}
          style={{
            width: this.isLandscape ? '10%' : 'initial',
            height: this.isLandscape ? 'initial' : '12%',
            left: this.isLandscape ? '2%' : '-100%',
            bottom: '0%'
          }}
        />

        <img
          src={BUNNY_BABY}
          className={styles.babyBunny2}
          style={{
            width: this.isLandscape ? '9%' : 'initial',
            height: this.isLandscape ? 'initial' : '12%',
            left: this.isLandscape ? '32%' : '55%',
            bottom: '15%'
          }}
        />
      </div>
    );
  }

  _monkey() {
    return (
      <div>
        <img
          src={OFFICE_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '70%' : 'initial',
            height: this.isLandscape ? 'initial' : '50%',
            left: '70%',
            transform: 'translate(-50%)',
            bottom: '20%'
          }}
        />
        <img
          src={MONKEY}
          className={styles.monkey}
          style={{
            width: this.isLandscape ? '23%' : 'initial',
            height: this.isLandscape ? 'initial' : '30%',
            left: this.isLandscape ? '70%' : '60%',
            bottom: '20%'
          }}
        />
        <img
          src={BEAR_LISTENING}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '30%' : '20%',
            transform: 'translate(-50%)',
            bottom: '2%'
          }}
        />
      </div>
    );
  }

  _monkeythinking() {
    return (
      <div>
        <img
          src={OFFICE_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '120%' : 'initial',
            height: this.isLandscape ? 'initial' : '100%',
            left: this.isLandscape ? '70%' : '55%',
            transform: 'translate(-50%)',
            bottom: this.isLandscape ? '10%' : '20%',
            opacity: 0.3
          }}
        />
        <img
          src={MONKEY_THINKING}
          style={{
            width: this.isLandscape ? '35%' : 'initial',
            height: this.isLandscape ? 'intital' : '90%',
            left: '60%',
            transform: 'translateX(-50%)',
            top: '10%'
          }}
        />
      </div>
    );
  }

  _fox() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '90%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: '60%',
            transform: 'translateX(-50%)',
            bottom: '30%',
            opacity: 0.4
          }}
        />
        <img
          src={FOX}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: '75%',
            transform: 'translateX(-50%)',
            bottom: '5%'
          }}
        />
      </div>
    );
  }

  _foxcloser() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '100%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '20%'
          }}
        />
        <img
          src={BEAR}
          style={{
            width: this.isLandscape ? '27%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            bottom: '20%',
            left: '35%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={BEAR_EYES_ANGRY}
          style={{
            width: this.isLandscape ? '27%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            bottom: '20%',
            left: '35%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={FOX_BEHIND}
          style={{
            width: this.isLandscape ? '22%' : 'initial',
            height: this.isLandscape ? 'initial' : '35%',
            bottom: '2%',
            left: '30%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    );
  }

  _roaring() {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: `translateX(-50%) scale(${this.isLandscape || this.width > 690 ? 1 : 0.6})`,
            width: '690px',
            height: '200px'
          }}>
          <img src={ROAR_R1} className={styles.jiggle1} style={{ width: '180px', top: '40px', left: '0px' }} />
          <img src={ROAR_O1} className={styles.jiggle2} style={{ width: '120px', top: '20px', left: '140px' }} />
          <img src={ROAR_A1} className={styles.jiggle3} style={{ width: '80px', top: '5px', left: '260px' }} />
          <img src={ROAR_A2} className={styles.jiggle1} style={{ width: '90px', top: '0px', left: '340px' }} />
          <img src={ROAR_R2} className={styles.jiggle3} style={{ width: '100px', top: '0px', left: '440px' }} />
          <img src={ROAR_R3} className={styles.jiggle2} style={{ width: '100px', top: '10px', left: '540px' }} />
          <img src={ROAR_BANG} className={styles.jiggle1} style={{ width: '60px', top: '20px', left: '630px' }} />
        </div>
        <img
          src={BEAR_ROAR}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '55%' : 'initial',
            height: this.isLandscape ? 'initial' : '95%',
            top: this.isLandscape ? '30%' : '40%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    );
  }

  _bearbox() {
    return (
      <div>
        <img
          src={BEAR_BOX}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '30%' : 'initial',
            height: this.isLandscape ? 'initial' : '30%',
            left: '33%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.9
          }}
        />
      </div>
    );
  }

  _typing() {
    return (
      <div>
        <img
          src={OWL_BACKGROUND}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '70%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '30%' : '40%',
            opacity: 0.4
          }}
        />
        <img
          src={TYPE_1}
          className={styles.typing1}
          style={{
            width: this.isLandscape ? '7%' : 'initial',
            height: this.isLandscape ? 'initial' : '3%',
            top: '50%',
            left: this.isLandscape ? '35%' : '20%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={TYPE_2}
          className={styles.typing2}
          style={{
            width: this.isLandscape ? '7%' : 'initital',
            height: this.isLandscape ? 'initial' : '5%',
            top: '54%',
            left: this.isLandscape ? '35%' : '28%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={BEAR_TYPING}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '30%' : 'initial',
            height: this.isLandscape ? 'initial' : '50%',
            top: '57%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          }}
        />
      </div>
    );
  }

  render() {
    const { pageNumber, isFact } = this.props;

    let scale = Math.min(this.width / 1000, this.height / 1200) - (this.isLandscape ? 0.1 : 0);

    let elephantIndex = pageNumber % 3;
    if (pageNumber === 0) {
      elephantIndex = -1;
    }

    return (
      <div className={styles.wrapper} style={{ width: this.width, height: this.height }}>
        {this.pages.map((page, index) => {
          const isCurrentPage = pageNumber <= page.pageNumber;

          if (page.pageNumber > pageNumber + 2) return;

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
              <div className={styles.graphic}>{page.render && page.render()}</div>
              <div
                className={styles.overlay}
                style={{ width: this.width, height: this.height, opacity: isCurrentPage ? 0 : 1 }}
              />
            </div>
          );
        })}

        <div
          className={`${styles.elephantBackground} ${isFact && elephantIndex == 0 ? styles.showElephant : ''}`}
          style={{ width: this.width, height: this.height }}>
          <div
            className={styles.elephant}
            style={{
              bottom: '0px',
              right: '0px',
              transform: `scale(${scale}) ${isFact && elephantIndex == 0 ? 'translate(0, 0)' : 'translate(150%, 150%)'}`
            }}>
            <img src={ELEPHANT} />
          </div>
        </div>

        <div
          className={`${styles.elephantBackground} ${isFact && elephantIndex == 1 ? styles.showElephant : ''}`}
          style={{ width: this.width, height: this.height }}>
          <div
            className={styles.elephant}
            style={{
              bottom: '0px',
              left: '0px',
              transformOrigin: '0% 100%',
              transform: `scale(${scale}) ${
                isFact && elephantIndex == 1 ? 'translate(0, 0)' : 'translate(-150%, 150%)'
              }`
            }}>
            <img src={ELEPHANT2} />
          </div>
        </div>

        <div
          className={`${styles.elephantBackground} ${isFact && elephantIndex == 2 ? styles.showElephant : ''}`}
          style={{ width: this.width, height: this.height }}>
          <div
            className={styles.elephant}
            style={{
              bottom: '0px',
              right: '0px',
              transform: `scale(${scale}) ${isFact && elephantIndex == 2 ? 'translate(0, 0)' : 'translate(150%, 150%)'}`
            }}>
            <img src={ELEPHANT3} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Book;
