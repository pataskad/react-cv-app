import React, { Component } from "react";
import logo from "../styles/top.jpeg";
import githubLogo from "../styles/GitHub-Mark-32px.png";

/*
 * Header.js will contain header elements,
 * Such as TOP, Title, and Github logo with link to source code
 *
 */

class Header extends Component {
  // no constructor/super necessary due to no props being passed at this time

  render () {
    return (
      <section className="header">
        <img src={logo} id="top-logo" alt="TOP logo"></img>
        <h1>React CV App</h1>
        <a href="https://github.com/pataskad/react-cv-app">
          <img src={githubLogo} id="github-logo" alt="GitHub logo"></img>
        </a>
        <hr className="line-styling"></hr>
      </section>
    );
  }
}

export default Header;
