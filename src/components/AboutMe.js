import React, { PureComponent } from "react";
import { css } from "glamor";
import Globals from "../utils/Globals";
import Schedule from "./Schedule";
import { Element } from "react-scroll";
import Text from "./Text";

const styles = {
  container: css({
    alignSelf: "flex-end",
    background: Globals.colors.white,
    width: "100vw",
    //display: "flex",
    "@media(max-width: 1224px)": {
      alignSelf: "auto",
    },
  }),
  imgContainer: css({
    width: "100%",
    "@media(min-width: 1224px)": {
      width: "50%",
      display: "flex ",
      float: "left",
      padding: "1em",
      margin: "3em 0 3em 0",
      border: "1px solid lightgray",
    },
    "> img": {
      maxWidth: "100%",
      margin: "0 auto",
      objectFit: "cover",
    },
    display: "flex ",
    margin: "0 auto",
  }),
  textContainer: css({
    display: "flex",
    "@media(min-width:1224px)": {
      padding: "5em 3em 0 3em",
      display: "flex",
      lineHeight: 2,
      textAlign: "left",
    },
  }),
  subtitleContainer: css({
    display: "flex",
    "@media(min-width:1224px)": {
      padding: "0 3em",
      display: "flex",
      lineHeight: 2,
      textAlign: "left",
      color: "rgba(0,0,0,0.6)",
    },
  }),
};

class AboutMe extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Element id="AboutMe" name="AboutMe">
          <Text title="About Me">
            <div style={{ marginBottom: "5em" }} />
            <div style={{ display: "flex" }}>
              <Schedule />
            </div>
          </Text>
        </Element>
      </div>
    );
  }
}

export default AboutMe;
