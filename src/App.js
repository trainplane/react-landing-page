import React, { PureComponent } from "react";
import { css } from "glamor";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./components/css/animation.css";
css.global("html, body", {
  padding: 0,
  margin: 0,
  fontFamily: "Rajdhani, sans-serif",
  background: "transparent",
  overflowX: "hidden",
});

class App extends PureComponent {
  render() {
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
