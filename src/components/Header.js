import React from "react";
import { css } from "glamor";
import Globals from "../utils/Globals";

import Infos from "./Infos";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";

import "./css/animation.css";

import macacoImg from "../media/images/ul.jpg";

const styles = {
  container: css({
    backgroundImage: `url('${macacoImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundColor: Globals.colors.backgroundHeader,
    backgroundSize: "100%",
    backgroundPosition: "160% 10px",
    color: Globals.colors.primary,
    width: "100%",
    minWidth: "100%",
    display: "flex",
    //alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    "@media(max-width: 720px)": {
      backgroundSize: "cover",
      backgroundPosition: "30% 100px",
    },
  }),

  box: css({
    display: "flex",
    justifyContent: "flex-start",
  }),
};

const Header = () => (
  <div {...styles.container}>
    <nav className="navbar" {...styles.box}>
      <Title />

      <span style={{ marginLeft: "auto", display: "flex" }}>
        <AboutMe />
        <Contacts />
      </span>
    </nav>

    <Infos />
  </div>
);

export default Header;
