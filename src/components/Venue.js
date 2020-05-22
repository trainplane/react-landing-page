import React, { PureComponent } from "react";
import { css } from "glamor";
import "./css/skillset.css";
import Globals from "../utils/Globals";
import imgTheater from "../media/images/theater-brigadeiro.jpg";
import Text from "./Text";
import { FaJava, FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";
const styles = {
  container: css({
    alignSelf: "flex-end",
    color: Globals.colors.white,
    background: Globals.colors.base,
    width: "100vw",
    display: "flex",
    "> img": {
      maxWidth: "100%",
    },
    "@media(max-width: 720px)": {
      alignSelf: "auto",
    },
  }),
  small: css({
    display: "block",
  }),
  mediumBtn: css({
    color: Globals.colors.background,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 360,
    borderRadius: 4,
    padding: "10px 20px",
    backgroundColor: Globals.colors.white,
    display: "block",
    margin: "0 auto",
    textDecoration: "none",
  }),
  evnts: css({
    margin: "0 auto 20px auto",
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Programming Skills">
          <div className="d-flex justify-content-center">
            <FaJava className="iHover" size="3em" />
            &emsp;
            <FaPython className="iHover" size="3em" />
            &emsp;
            <FaReact className="iHover" size="3em" />
            &emsp;
            <FaDatabase className="iHover" size="3em" />
            &emsp;
            <DiGitBranch className="iHover" size="3em" />
            &emsp;
            <AiFillPlusCircle className="AiFillPlusCircle" size="3em" />
          </div>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
