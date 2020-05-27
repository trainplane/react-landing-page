import React, { PureComponent } from "react";
import { css } from "glamor";

const styles = {
  container: css({
    background: "black",
    color: "white",
    width: "100%",
    flexDirection: "column",
    padding: 20,
  }),
};

class Footer extends PureComponent {
  render() {
    return <div {...styles.container}></div>;
  }
}

export default Footer;
