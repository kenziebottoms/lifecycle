import React, { Component } from "react";
import "./scss/App.scss";
import Menus from "./Menus";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTurn: false
    };
    console.log(this.state);
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Lifecycle</h1>
        </header>
        <Menus active={this.state.myTurn} />
      </div>
    );
  }
}

export default App;
