import React, { Component } from 'react';
import './scss/App.scss';
import Header from './Header';
import IntroForm from './IntroForm';
import Conditions from './Conditions';
import Menus from './Menus';

import constants from './constants';
let { turnStages, localStorageVariable } = constants;

class App extends Component {
  constructor(props) {
    super(props);
    let store = window.localStorage.getItem(localStorageVariable);
    store = JSON.parse(store) || null;
    this.state = {
      turnStage: store.turnStage || turnStages.INACTIVE,
      char: store.char || null,
      conditions: store.conditions || [],
    };
  }

  updateCharacter(char) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.char = char;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  updateConditions(conditions) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.conditions = conditions;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  render() {
    return (
      <div className="app">
        <Header char={this.state.char} />

        <Conditions
          updateConditions={conditions => this.updateConditions(conditions)}
          conditions={this.state.conditions}
        />

        <Menus
          char={this.state.char}
          onCharacterChange={char => this.updateCharacter(char)}
          active={this.state.myTurn}
        />

        <IntroForm
          char={this.state.char}
          submit={char => this.updateCharacter(char)}
        />
      </div>
    );
  }
}

export default App;
