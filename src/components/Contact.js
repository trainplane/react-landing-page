import React, { PureComponent } from "react";
import { css } from "glamor";

import Text from "./Text";
import { FaStackOverflow, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./css/skillset.css";

const styles = {
  container: css({
    alignSelf: "flex-end",
    background: "#ffffff",
    width: "100vw",
    display: "flex",
  }),
};

class TextContact extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Contact">
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ismail-ulas-bayram-b12b6a159/"
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
            href="https://github.com/trainplane"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <FaGithub
              className="contact"
              size="3em"
              style={{ margin: "1em" }}
            />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/6045990/ulas-bayram"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <FaStackOverflow
              className="contact"
              size="3em"
              style={{ margin: "1em" }}
            />
          </a>

          <p>
            E-mail:
            <br />
            <a style={{ color: "black" }} href="mailto:iulasbayram@gmail.com">
              iulasbayram@gmail.com
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextContact;
