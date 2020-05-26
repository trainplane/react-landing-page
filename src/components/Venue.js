import React, { PureComponent } from "react";
import { css } from "glamor";
import "./css/skillset.css";
import "./css/bootstrap-progressbar.css";
import Globals from "../utils/Globals";
import Text from "./Text";
import { FaJava, FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import { AiFillPlusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
};

const skillList = [
  {
    language: "Java",
    framework: [
      { name: "Object-Oriented Programming", percentage: "100%" },
      { name: "Spring Boot", percentage: "50%" },
      { name: "Spring", percentage: "50%" },
      { name: "Hibernate", percentage: "50%" },
      { name: "Aspect-Oriented Programmning", percentage: "25%" },
    ],
    color: "#17368a",
  },
  {
    language: "Python",
    framework: [
      { name: "Tensorflow", percentage: "50%" },
      { name: "Scikit-Learn", percentage: "50%" },
      { name: "OpenAI", percentage: "25%" },
      { name: "OpenCV", percentage: "25%" },
    ],
    color: "#17368a",
  },
  {
    language: "ReactJs",
    framework: [{ name: "Bootstrap", percentage: "50%" }],
    color: "#17368a",
  },
  {
    language: "Database",
    framework: [
      { name: "Oracle", percentage: "75%" },
      { name: "PostgreSql", percentage: "75%" },
      { name: "MySql", percentage: "25%" },
    ],
    color: "#17368a",
  },
  {
    language: "VCS",
    framework: [
      { name: "Git", percentage: "75%" },
      { name: "TortoiseGit", percentage: "50%" },
    ],
    color: "#17368a",
  },
  {
    language: "Additional",
    framework: [
      { name: "Data Structures", percentage: "100%" },
      { name: "Software Design Patterns", percentage: "75%" },
      { name: "Machine Learning", percentage: "50%" },
      { name: "Software Testing", percentage: "25%" },
    ],
    color: "green",
  },
];

class TextVenue extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpened: false,
      language: "",
    };
  }

  changeVisibility = (e) => () => {
    e === this.state.isOpened
      ? this.setState({ isOpened: false, language: e })
      : this.setState({ isOpened: e, language: e });
  };

  render() {
    let selectedSkill = skillList.find(
      (skill) => skill.language === this.state.language
    );
    if (selectedSkill !== undefined) {
      console.log(selectedSkill.framework[0]);
    }

    return (
      <div {...styles.container}>
        <Text title="Programming Skills">
          <div className="d-flex justify-content-center">
            <FaJava
              onClick={this.changeVisibility("Java")}
              className="iHover"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
            <FaPython
              onClick={this.changeVisibility("Python")}
              className="iHover"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
            <FaReact
              onClick={this.changeVisibility("ReactJs")}
              className="iHover"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
            <FaDatabase
              onClick={this.changeVisibility("Database")}
              className="iHover"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
            <DiGitBranch
              onClick={this.changeVisibility("VCS")}
              className="iHover"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
            <AiFillPlusCircle
              onClick={this.changeVisibility("Additional")}
              className="AiFillPlusCircle"
              size="3em"
              style={{ margin: ".7em" }}
              cursor="pointer"
            />
          </div>
          <Collapse isOpened={this.state.isOpened} height="300px">
            <br />
            <br />

            {selectedSkill !== undefined &&
              selectedSkill.framework.map((p) => (
                <div>
                  <p />
                  <div
                    class="progress"
                    style={{
                      width: "auto",
                      margin: "auto",
                    }}
                  >
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{
                        width: p.percentage,
                        backgroundColor: selectedSkill.color,
                      }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {p.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Collapse>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
