import React, { PureComponent } from "react";
import { css, hover } from "glamor";

import Text from "./Text";
import Globals from "../utils/Globals";
import { FaStackOverflow, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./css/skillset.css";

const styles = {
  container: css({
    alignSelf: "flex-end",
    background: "#ffffff",
    width: "100vw",
    display: "flex",
  }),
  link: css({
    color: "black",
  }),
};

class TextContact extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Contact">
          <a
            rel="noopener noreferrer"
            href="https://github.com/react-brasil"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <FaLinkedinIn
              className="contact"
              size="3em"
              style={{ margin: "1em" }}
            />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/reactconf/"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <FaGithub
              className="contact"
              size="3em"
              style={{ margin: "1em" }}
            />
          </a>

          <p>
            Envie sua{" "}
            <i lang="en" className="notranslate">
              Pull Request
            </i>
            . Ajude a manter esta página:
            <br />
            <a {...styles.link} href="https://github.com/react-brasil/conf">
              https://github.com/react-brasil/conf
            </a>
          </p>
          <p>
            E-mail:
            <br />
            <a {...styles.link} href="mailto:reactconfbr@gmail.com">
              reactconfbr@gmail.com
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextContact;
