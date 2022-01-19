/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Bio from "./components/Bio";
import logo from "./styles/top.jpeg";

class App extends Component {
  
  render() {

    return (
      <div className="container">

        <img src={logo} id="top-logo" alt="TOP logo"></img>
        <hr className="line-styling"></hr>
        
        <Bio />
        <hr className="line-styling"></hr>
      
      </div>
    );
  }
}

export default App;
