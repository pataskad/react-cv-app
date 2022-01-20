/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Bio from "./components/Bio";
import Header from "./components/Header";

class App extends Component {
  // no props required/being passed, hence no constructor/super
  
  render() {
    return (
      <div className="container">
        <Header /> 
        <Bio />
      </div>
    );
  }
}

export default App;
