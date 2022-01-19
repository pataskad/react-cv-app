import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "Hello World!",
    };
  }

  render() {
    const { text } = this.state;
    
    return (
      <div>
        <h1 className="tester">{text}</h1>
      </div>
    );
  }
}

export default App;
