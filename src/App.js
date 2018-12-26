import React, { Component } from "react";
import "./App.scss";
import Turn from "./Turn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTurn: false
    };
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Lifecycle</h1>
        </header>
        <Turn active={this.state.myTurn} />
      </div>
    );
  }
}

export default App;
