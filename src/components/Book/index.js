const React = require('react');
const Images = require('./images');

const styles = require('./styles.scss');

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
          src={Images.FOREST_BACKGROUND}
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
          <img
            className={styles.float1}
            src={Images.TITLE_WORD_BEAR}
            style={{ left: '0px', top: '0px', maxWidth: '500px' }}
          />
          <img
            className={styles.float2}
            src={Images.TITLE_WORD_FINDS}
            style={{ left: '516px', top: '43px', maxWidth: '400px' }}
          />
          <img
            className={styles.float3}
            src={Images.TITLE_WORD_A}
            style={{ left: '182px', top: '233px', maxWidth: '100px' }}
          />
          <img
            className={styles.float4}
            src={Images.TITLE_WORD_VOICE}
            style={{ left: '340px', top: '224px', maxWidth: '550px' }}
          />
        </div>
        <img
          src={Images.BEAR_TITLE}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '50%' : '120%',
            left: '50%',
            transform: 'translate(-50%, -78%)',
            top: '100%'
          }}
        />
        <img
          src={Images.BEAR_TITLE_EYES_OPEN}
          className={styles.blinkingOpen}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '50%' : '120%',
            left: '50%',
            transform: 'translate(-50%, -78%)',
            top: '100%'
          }}
        />
        <img
          src={Images.BEAR_TITLE_EYES_CLOSED}
          className={styles.blinkingClosed}
          style={{
            maxWidth: 'initial',
            width: this.isLandscape ? '50%' : '120%',
            left: '50%',
            transform: 'translate(-50%, -78%)',
            top: '100%'
          }}
        />
      </div>
    );
  }

  _bear() {
    return (
      <div>
        <img
          src={Images.FOREST_BACKGROUND}
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
          src={Images.BEAR}
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
          src={Images.FOREST_BACKGROUND}
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
          src={Images.BEAR_SAD}
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
          src={Images.CHICKEN_BACKGROUND}
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
          src={Images.CHICKEN}
          style={{
            width: this.isLandscape ? '17%' : 'initial',
            height: this.isLandscape ? 'initial' : '20%',
            left: this.isLandscape ? '20%' : '25%',
            transform: 'translateX(-50%)',
            bottom: this.isLandscape ? '25%' : '35%'
          }}
        />
        <img
          src={Images.BEAR_LISTENING}
          style={{
            width: this.isLandscape ? '25%' : 'initial',
            height: this.isLandscape ? 'initial' : '80%',
            left: this.isLandscape ? '30%' : '20%',
            bottom: '4%',
            transform: `scale(-1, 1) rotate(3deg) translateX(-50%)`
          }}
        />
      </div>
    );
  }

  _chickencloser() {
    return (
      <div>
        <img
          src={Images.CHICKEN_BACKGROUND}
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
          src={Images.CHICKEN_CLOSER}
          style={{
            width: this.isLandscape ? '20%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            left: this.isLandscape ? '40%' : '50%',
            transform: 'translateX(-50%)',
            bottom: '8%'
          }}
        />
      </div>
    );
  }

  _owl() {
    return (
      <div>
        <img
          src={Images.FOREST_BACKGROUND}
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
          src={Images.OWL}
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
          src={Images.BEAR_LISTENING}
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
          src={Images.PIG_BACKGROUND}
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
          src={Images.PIG}
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
          src={Images.PIG_BACKGROUND}
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
          src={Images.PIG_CLOSER}
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
          src={Images.BUNNY_BACKGROUND}
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
          src={Images.BUNNY_BABY}
          className={styles.babyBunny3}
          style={{
            width: this.isLandscape ? '7%' : 'initial',
            height: this.isLandscape ? 'initial' : '11%',
            left: this.isLandscape ? '30%' : '50%',
            bottom: '30%',
            opacity: 0.9
          }}
        />

        <img
          src={Images.BUNNY}
          style={{
            width: this.isLandscape ? '20%' : 'initial',
            height: this.isLandscape ? 'initial' : '48%',
            left: this.isLandscape ? '20%' : '20%',
            transform: 'translateX(-50%)',
            bottom: '10%'
          }}
        />

        <img
          src={Images.BUNNY_BABY}
          className={styles.babyBunny1}
          style={{
            width: this.isLandscape ? '9%' : 'initial',
            height: this.isLandscape ? 'initial' : '1%',
            left: this.isLandscape ? '2%' : '-100%',
            bottom: '0%'
          }}
        />

        <img
          src={Images.BUNNY_BABY}
          className={styles.babyBunny2}
          style={{
            width: this.isLandscape ? '8%' : 'initial',
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
          src={Images.OFFICE_BACKGROUND}
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
          src={Images.MONKEY}
          className={styles.monkey}
          style={{
            width: this.isLandscape ? '23%' : 'initial',
            height: this.isLandscape ? 'initial' : '30%',
            left: this.isLandscape ? '70%' : '60%',
            bottom: '20%'
          }}
        />
        <img
          src={Images.BEAR_LISTENING}
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
          src={Images.OFFICE_BACKGROUND}
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
          src={Images.MONKEY_THINKING}
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
          src={Images.FOREST_BACKGROUND}
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
          src={Images.FOX}
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
          src={Images.FOREST_BACKGROUND}
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
          src={Images.BEAR}
          style={{
            width: this.isLandscape ? '27%' : 'initial',
            height: this.isLandscape ? 'initial' : '60%',
            bottom: '20%',
            left: '35%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={Images.FOX_BEHIND}
          style={{
            width: this.isLandscape ? '18%' : 'initial',
            height: this.isLandscape ? 'initial' : '42%',
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
          <img src={Images.ROAR_R1} className={styles.jiggle1} style={{ width: '180px', top: '40px', left: '0px' }} />
          <img src={Images.ROAR_O1} className={styles.jiggle2} style={{ width: '120px', top: '20px', left: '140px' }} />
          <img src={Images.ROAR_A1} className={styles.jiggle3} style={{ width: '80px', top: '5px', left: '260px' }} />
          <img src={Images.ROAR_A2} className={styles.jiggle1} style={{ width: '90px', top: '0px', left: '340px' }} />
          <img src={Images.ROAR_R2} className={styles.jiggle3} style={{ width: '100px', top: '0px', left: '440px' }} />
          <img src={Images.ROAR_R3} className={styles.jiggle2} style={{ width: '100px', top: '10px', left: '540px' }} />
          <img
            src={Images.ROAR_BANG}
            className={styles.jiggle1}
            style={{ width: '60px', top: '20px', left: '630px' }}
          />
        </div>
        <img
          src={Images.BEAR_ROAR}
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
          src={Images.BEAR_BOX}
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
          src={Images.FOREST_BACKGROUND}
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
          src={Images.TYPE_1}
          className={styles.typing1}
          style={{
            width: this.isLandscape ? '7%' : 'initial',
            height: this.isLandscape ? 'initial' : '3%',
            top: '50%',
            left: this.isLandscape ? '35%' : '18%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={Images.TYPE_2}
          className={styles.typing2}
          style={{
            width: this.isLandscape ? '7%' : 'initital',
            height: this.isLandscape ? 'initial' : '5%',
            top: '54%',
            left: this.isLandscape ? '35%' : '22%',
            transform: 'translateX(-50%)'
          }}
        />
        <img
          src={Images.BEAR_TYPING}
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

  _end() {
    return <div>the end...</div>;
  }

  render() {
    const { pageNumber } = this.props;

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
      </div>
    );
  }
}

module.exports = Book;
