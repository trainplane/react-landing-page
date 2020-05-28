import React, { PureComponent } from "react";
import { css } from "glamor";

import "./css/animation.css";

const styles = {
  container: css({
    // alignSelf: 'flex-end',
    display: "flex",
    margin: "0",
    color: "white",
    fontSize: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media(max-width: 720px)": {
      display: "flex",
      width: "80%",
      margin: "0 auto",
    },
  }),

  header: css({
    position: "relative",
    fontSize: 30,
    margin: "10 auto 10em auto",
  }),
  text: css({
    fontSize: 20,
    margin: "0 auto 4em auto",
  }),

  a: css({
    textAlign: "center",
  }),
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <p {...styles.header}>
          <div {...styles.a}>
            <div id="first" className="letter">
              <h1>Develop</h1>
            </div>
            <div id="second" className="letter">
              <h1>Your</h1>
            </div>
            <div id="third" className="letter">
              <h1>Future</h1>
            </div>
          </div>
        </p>
        <p {...styles.text}>{"Istanbul, Turkey"}</p>
      </div>
    );
  }
}

export default Infos;
