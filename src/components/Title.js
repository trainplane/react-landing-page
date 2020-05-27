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

  title: css({
    color: "white",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginLeft: 30,
    lineHeight: "1em",
    fontSize: " 1.827em ",
  }),

  titleSpan: css({
    color: "#00A9FF",
  }),

  subtitle: css({
    fontSize: " 1.414em ",
    margin: "0 0 0 30px",
    lineHeight: "1em",
    textTransform: "uppercase",
    padding: "10px 15px 0 0",
    position: "relative",
    top: "20px",
    color: "#00A9FF",
    borderTop: `3px solid ${"#00A9FF"}`,
    fontWeight: 600,
  }),
};

const Title = () => (
  <div {...styles.header}>
    <h1 {...styles.title} className="notranslate">
      {"IsmailUlas"}
      <span {...styles.titleSpan}>{"Bayram"}</span>
    </h1>

    <a
      rel="noopener noreferrer"
      href="https://github.com/trainplane"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <span className="effect-shine" {...styles.subtitle}>
        {"trainplane"}
      </span>
    </a>
  </div>
);

export default Title;
