import React from "react";
import { css } from "glamor";

import Infos from "./Infos";
import Title from "./Title";
import AboutMeButton from "./AboutMeButton";
import ContactButton from "./ContactButton";
import Scroll from "react-scroll";
import "./css/animation.css";
import "./css/responsive-nav.css";

import macacoImg from "../media/images/ul.jpg";

const Link = Scroll.Link;

const styles = {
  container: css({
    backgroundImage: `url('${macacoImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#080c27",
    backgroundSize: "100%",
    backgroundPosition: "160% 0px",
    color: "#222",
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
        <Link to="AboutMe" spy={true} smooth={true} duration={1000}>
          <AboutMeButton className="elem" />
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={2000}>
          <ContactButton className="elem" />
        </Link>
      </span>
    </nav>

    <Infos />
  </div>
);

export default Header;
