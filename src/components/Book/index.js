const React = require('react');
const styles = require('./styles.scss');

const BEAR_ROAR = require('./bear-roar.png');
const ROAR_R1 = require('./r1.png');
const ROAR_O1 = require('./o1.png');
const ROAR_A1 = require('./a1.png');
const ROAR_A2 = require('./a2.png');
const ROAR_R2 = require('./r2.png');
const ROAR_R3 = require('./r3.png');
const ROAR_BANG = require('./bang.png');

const BEAR_TYPING = require('./bear-typing.png');
const TYPE_1 = require('./type1.png');
const TYPE_2 = require('./type2.png');

class Book extends React.Component {
  render() {
    // TODO: use props.page string to check which div to set opacity of 1

    return (
      <div className={styles.wrapper} style={{ width: window.innerWidth, height: window.innerHeight }}>
        <div className={styles.graphic} style={{ opacity: 0 }}>
          <div style={{ position: 'absolute', top: '150px', left: '150px', width: '690px', height: '200px' }}>
            <img src={ROAR_R1} className={styles.jiggle1} style={{ width: '180px', top: '40px', left: '0px' }} />
            <img src={ROAR_O1} className={styles.jiggle2} style={{ width: '120px', top: '20px', left: '140px' }} />
            <img src={ROAR_A1} className={styles.jiggle3} style={{ width: '80px', top: '5px', left: '260px' }} />
            <img src={ROAR_A2} className={styles.jiggle1} style={{ width: '90px', top: '0px', left: '340px' }} />
            <img src={ROAR_R2} className={styles.jiggle3} style={{ width: '100px', top: '0px', left: '440px' }} />
            <img src={ROAR_R3} className={styles.jiggle2} style={{ width: '100px', top: '10px', left: '540px' }} />
            <img src={ROAR_BANG} className={styles.jiggle1} style={{ width: '60px', top: '20px', left: '630px' }} />
          </div>
          <img src={BEAR_ROAR} style={{ width: '600px', bottom: '0px', left: '200px' }} />
        </div>

        <div className={styles.graphic} style={{ opacity: 1 }}>
          <img src={TYPE_1} className={styles.typing1} style={{ width: '120px', top: '490px', left: '180px' }} />
          <img src={TYPE_2} className={styles.typing2} style={{ width: '120px', top: '550px', left: '160px' }} />
          <img src={BEAR_TYPING} style={{ width: '800px', top: '50px', left: '100px' }} />
        </div>
      </div>
    );
  }
}

module.exports = Book;
