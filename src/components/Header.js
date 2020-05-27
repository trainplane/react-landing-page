import React from "react";
import { css } from "glamor";
import Globals from "../utils/Globals";

import Infos from "./Infos";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Contact from "./Contacts";
import "./css/animation.css";
import "./css/responsive-nav.css";

import macacoImg from "../media/images/ul.jpg";

const styles = {
  container: css({
    backgroundImage: `url('${macacoImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundColor: Globals.colors.backgroundHeader,
    backgroundSize: "100%",
    backgroundPosition: "160% 0px",
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
      backgroundPosition: "30% 0",
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

      <span className="topnav">
        <AboutMe className="elem" />
        <Contact className="elem" />
      </span>
    </nav>

    <Infos />
  </div>
);

export default Header;
