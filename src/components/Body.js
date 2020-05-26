import React, { PureComponent } from "react";
import { css } from "glamor";
import Globals from "../utils/Globals";
import Event from "./Event";
import Venue from "./Venue";

import Contact from "./Contact";

const styles = {
  container: css({
    display: "flex",
    background: Globals.colors.background,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Event />
        <Venue />
        <Contact />
      </div>
    );
  }
}

export default App;
