const React = require("react");
const Images = require("./images");
const styles = require("./styles.scss").default;

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

    this.props.nodes.forEach((node) => {
      if (node && node.hasAttribute("height")) {
        node.removeAttribute("height");
      }

      if (node && node.className === "inline-content infographic full") {
        let anchor = node.querySelector("a");
        if (anchor) {
          anchor.removeAttribute("href");
        }
      }

      this.base.appendChild(node);
    });

    this.props.reference(this.base);
  }

  componentWillUnmount() {
    if (!this.base) return;
    if (!this.props.nodes) return;

    this.props.nodes.forEach((node) => {
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
      c === "" ? styles.base : c,
      config.light ? styles.light : null,
      typeof config.align !== "undefined" ? styles[config.align] : null,
    ]
      .filter((c) => c)
      .join(" ");

    if (config.fact && config.pageNumber > 2) {
      let src;
      let stick;

      let elephantStyle = {
        maxWidth: "initial",
        width: this.isLandscape ? "32%" : "88%",
        position: "absolute",
        top: this.isLandscape ? "70%" : "80%",
        transform: "translateY(-50%)",
        zIndex: 2,
      };

      let bgStyle = {
        maxWidth: "initial",
        position: "absolute",
        width: this.isLandscape ? "70%" : "120%",
        height: this.isLandscape ? "100%" : "50%",
        top: this.isLandscape ? "85%" : "91%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
      };

      let whichElephant = config.pageNumber % 3;

      if (
        config.page === "monkeythinking" ||
        config.page === "fox" ||
        config.page === "pig" ||
        config.page === "pigcloser"
      ) {
        whichElephant = 1;
      }

      switch (whichElephant) {
        case 0:
          elephantStyle.right = "0px";
          src = Images.ELEPHANT_1;
          stick = "stickRight";
          bgStyle.left = "100%";
          break;
        case 1:
          elephantStyle.left = "0px";
          elephantStyle.width = this.isLandscape ? "35%" : "90%";
          src = Images.ELEPHANT_2;
          stick = "stickLeft";
          bgStyle.left = "0%";
          bgStyle.opacity = 0.8;
          bgStyle.top = this.isLandscape
            ? top
            : this.isLandscape
            ? "85%"
            : "90%";
          break;
        case 2:
          elephantStyle.right = "0px";
          src = Images.ELEPHANT_3;
          stick = "stickRight";
          bgStyle.left = "100%";
          break;
      }

      return (
        <div
          className={styles.wrapper}
          style={{
            marginBottom: config.fact && config.pageNumber > 2 ? "50vh" : "0",
          }}
        >
          <div
            id={this.props.id}
            className={`${className} ${config.fact ? styles.fact : ""}`}
          >
            <div className={styles.factPanelTop} />
            <div className={styles.factPanelMiddle}>
              <div ref={(el) => (this.base = el)} />
            </div>
            <div className={styles.factPanelBottom} />
            <div className={`${styles.stick} ${styles[stick]}`} />
          </div>
          <img src={src} style={elephantStyle} />
        </div>
      );
    }

    let styleOverride;
    if (config.page === "title") {
      styleOverride = { display: "none", marginTop: "0", marginBottom: "0" };
    }

    return (
      <div className={styles.wrapper} style={styleOverride}>
        <div
          id={this.props.id}
          className={className}
          style={
            config.hideBackground
              ? { background: "none", textAlign: "center" }
              : {}
          }
        >
          <div ref={(el) => (this.base = el)} className={styles.special} />
        </div>
      </div>
    );
  }
}

Panel.defaultProps = {
  config: {},
};

module.exports = Panel;
