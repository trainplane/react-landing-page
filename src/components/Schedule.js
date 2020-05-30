import React from "react";
import { css } from "glamor";
import VerticalTimelineComp from "./VerticalTimelineComp";

const styles = {
  container: css({
    background: "#fff",
    width: "100vw",
    paddingBottom: "2em",
    //alignItems: "center",
    "@media(max-width: 720px)": {
      alignSelf: "auto",
    },
  }),
  list: css({
    listStyle: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  }),
  disclaimer: css({
    padding: 0,
    maxWidth: "600px",
    margin: "30px auto",
    textAlign: "right",
  }),
  event: css({
    display: "flex",
    //borderTop: "1px solid #333",
    //padding: "1em 0 0.5em",
    justifyContent: "space-around",
    " div": {},
    " h2": {
      margin: "0 0 0.3em 0",
      " span": {
        fontSize: "0.7em",
      },
    },
    " h3": {
      fontWeight: "lighter",
      fontSize: "1.3em",
      margin: 0,
    },
  }),
  time: css({
    fontSize: "1.7em",
    paddingLeft: "0cm",
    whiteSpace: "nowrap",
  }),
  desc: css({
    width: "100%",
    padding: "0.2em 1.3em",
  }),

  expHeader: css({
    float: "left",
    position: "relative",
    fontSize: "1.2em",
    marginTop: "-3em",
    marginBottom: "4em",
  }),

  verticalLine: css({
    borderRight: "6px solid green",
    height: "200px",
    paddingRight: "1em",
  }),
};

const Experience = () => <VerticalTimelineComp />;

const Schedule = ({ events = eventsList }) => (
  <section {...styles.container}>
    <Experience />
  </section>
);

export default Schedule;
