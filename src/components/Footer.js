import React, { PureComponent } from "react";
import { css } from "glamor";
import Globals from "../utils/Globals";

const styles = {
  container: css({
    background: Globals.colors.background,
    color: Globals.colors.white,
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
