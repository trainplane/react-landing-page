import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./css/style.min.css";
import "./css/main.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

class VerticalTimelineComp extends Component {
  render() {
    return (
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Izmir Selma Yigitalp Anatolian High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Science and Math , 85.78 / 100
            <span style={{ float: "right", fontWeight: "normal" }}>Izmir</span>
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Izmir Institute Of Tehnology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Engineering B.Sc , 2.83 / 4.00
            <span style={{ float: "right", fontWeight: "normal" }}>Izmir</span>
          </h4>
          <p style={{ textAlign: "left" }}>
            <b>Graduation Thesis:</b> Sport News Mention Tracker using Software
            Product Line Approach - My teammate and I were working on Software
            Product Line (SPL) technology. SPL has plug-in model architecture
            based on strategy design pattern and all components work like wheels
            of the system thanks to it. We had worked to optimize SPL technology
            on News Tracking interface. Used technologies in our thesis are
            Reactjs, Java with SpringBoot and MongoDB.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07/2018 – 08/2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">ServisNet</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Full-Stack Java Developer Intern
            <span style={{ float: "right", fontWeight: "normal" }}>
              Istanbul
            </span>
          </h4>
          <ul style={{ padding: "10px", textAlign: "left" }}>
            <li>
              Developed Survey Interface of ServisNet using Java, Xhtml and
              JBoss Server
            </li>
            <li>
              Created database system to keep track of users (such as name,
              survey answers etc.) in the system
            </li>
            <li>Experience with Spring and Hibernate</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="07/2019 – 12/2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Detecon International Gmbh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Data Scientist Intern
            <span style={{ float: "right", fontWeight: "normal" }}>Berlin</span>
          </h4>
          <ul style={{ padding: "10px", textAlign: "left" }}>
            <li>
              Created real-time traffic scenario by using Simulation of Urban
              Mobility (SUMO)
            </li>
            <li>
              Generated vehicles (input) data which have aspect of different
              velocity, acceleration, deceleration and characteristic
            </li>
            <li>
              Developed reinforcement learning algorithm for double-lanes
              intersection scenario
            </li>
            <li>
              Integrated the algorithm as intelligent traffic light into the
              simulation
            </li>
            <li>
              Comparison of intelligent and traditional traffic lights with
              real-time graph streaming
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;04/2020 – Present"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">Huawei</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Assistant Software Engineer
            <span style={{ float: "right", fontWeight: "normal" }}>
              Istanbul
            </span>
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default VerticalTimelineComp;
