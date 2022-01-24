/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Experience from "./components/Experience";

class App extends Component {
  // no props required/being passed, hence no constructor/super

  render () {
    return (
      <>
        <Header />
        <Bio />
        <Experience />
      </>
    );
  }
}

export default App;
