import React, { Component } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Menus from "./Menus";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTurn: false,
      user: null
    };
  }
  render() {
    return (
      <div className="app">
        <Header user={this.state.user} />
        <Menus user={this.state.user} active={this.state.myTurn} />
      </div>
    );
  }
}

export default App;
