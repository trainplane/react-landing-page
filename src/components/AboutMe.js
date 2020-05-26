import React from "react";
import { css } from "glamor";

import Globals from "../utils/Globals";
import "./css/animation.css";

const styles = {
  header: css({
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "left",
  }),

  title: css({
    color: Globals.colors.white,
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginLeft: 30,
    lineHeight: "1em",
    fontSize: " 1.827em ",
  }),
};

const AboutMe = () => (
  <div {...styles.header}>
    <a href="" style={{ textDecoration: "none" }}>
      <h1 className="texthover">AboutMe </h1>
    </a>
  </div>
);

export default AboutMe;
