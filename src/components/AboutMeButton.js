import React from "react";
import { css } from "glamor";

import "./css/animation.css";

const styles = {
  header: css({
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "left",
  }),
};

const AboutMeButton = () => (
  <div {...styles.header}>
    <a href="/#" style={{ textDecoration: "none" }}>
      <h1 className="texthover">AboutMe</h1>
    </a>
  </div>
);

export default AboutMeButton;
