import React, { Component } from "react";
import "./scss/App.scss";
import Header from "./Header";
import Menus from "./Menus";
import constants from "./constants";
let { turnStages, localStorageVariables } = constants;
let { CHAR, TURN } = localStorageVariables;

class App extends Component {
  constructor(props) {
    super(props);
    let store = window.localStorage;
    let char = store.getItem(CHAR);
    let turn = store.getItem(TURN);
    this.state = {
      turnStage: turn ? JSON.parse(turn) : turnStages.INACTIVE,
      char: char ? JSON.parse(char) : null
    };
  }
  render() {
    return (
      <div className="app">
        <Header char={this.state.char} />
        <Menus char={this.state.char} active={this.state.myTurn} />
      </div>
    );
  }
}

export default App;
