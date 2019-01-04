import React, { Component } from "react";
import "./scss/App.scss";
import Header from "./Header";
import IntroForm from "./IntroForm";
import Menus from "./Menus";

import constants from "./constants";
let { turnStages, localStorageVariables } = constants;
let { CHARACTER, TURN } = localStorageVariables;

class App extends Component {
  constructor(props) {
    super(props);
    let store = window.localStorage;
    let char = store.getItem(CHARACTER);
    let turn = store.getItem(TURN);
    this.state = {
      turnStage: turn ? JSON.parse(turn) : turnStages.INACTIVE,
      char: char ? JSON.parse(char) : null
    };
  }
  updateCharacter(char) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.char = char;
    this.setState(state);
    window.localStorage.setItem(CHARACTER, JSON.stringify(char));
  }
  intro() {
    if (!this.state.char)
      return <IntroForm submit={char => this.updateCharacter(char)} />;
  }
  render() {
    return (
      <div className="app">
        <Header char={this.state.char} />
        <Menus
          char={this.state.char}
          onCharacterChange={char => this.updateCharacter(char)}
          active={this.state.myTurn}
        />
        {this.intro()}
      </div>
    );
  }
}

export default App;
