import React, { PureComponent } from "react";
import { css } from "glamor";
import AboutMe from "./AboutMe";
import ProgrammingSkills from "./ProgrammingSkills";
import Contact from "./Contact";

const styles = {
  container: css({
    display: "flex",
    background: "black",
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
        <AboutMe />
        <ProgrammingSkills />
        <Contact />
      </div>
    );
  }
}

export default App;
