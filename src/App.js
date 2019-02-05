import React, { Component } from 'react';
import './scss/App.scss';
import Header from './Header';
import IntroForm from './IntroForm';
import Conditions from './Conditions';
import ActionMenu from './menus/Action';
import BonusActionMenu from './menus/BonusAction';
import ReactionMenu from './menus/Reaction';
import TurnControls from './TurnControls';

import constants from './constants';
let { turnStages, localStorageVariable } = constants;

class App extends Component {
  constructor(props) {
    super(props);
    let store = window.localStorage.getItem(localStorageVariable);
    store = JSON.parse(store);
    this.state = {
      turn: store ? store.turn : turnStages.INACTIVE,
      char: store ? store.char : null,
      conditions: store ? store.conditions : [],
    };
  }

  updateCharacter(char) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.char = char;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  updateSpeed(speed) {
    let char = JSON.parse(JSON.stringify(this.state.char));
    char.speed = speed;
    this.updateCharacter(char);
  }

  updateConditions(conditions) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.conditions = conditions;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  activateTurn(turn) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.turn = turn;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  render() {
    return (
      <div className="app">
        <Header char={this.state.char} />

        <Conditions
          char={this.state.char}
          conditions={this.state.conditions}
          updateConditions={conditions => this.updateConditions(conditions)}
        />

        <TurnControls
          activateTurn={turn => this.activateTurn(turn)}
          turn={this.state.turn}
        />

        <ActionMenu
          turn={this.state.turn}
          active={Math.floor(this.state.turn) === turnStages.ACTION}
          disabled={Math.floor(this.state.turn) === turnStages.REACTION}
          checked={Math.floor(this.state.turn) > turnStages.ACTION}
          char={this.state.char}
          onSpeedChange={speed => this.updateSpeed(speed)}
          onComplete={() => this.activateTurn(turnStages.BONUS)}
        />
        <BonusActionMenu
          turn={this.state.turn}
          char={this.state.char}
          active={Math.floor(this.state.turn) === turnStages.BONUS}
          disabled={Math.floor(this.state.turn) === turnStages.REACTION}
          checked={Math.floor(this.state.turn) > turnStages.BONUS}
          onComplete={() => this.activateTurn(turnStages.MID_TURN)}
        />
        <ReactionMenu
          turn={this.state.turn}
          char={this.state.char}
          active={Math.floor(this.state.turn) === turnStages.REACTION}
          disabled={Math.floor(this.state.turn) !== turnStages.REACTION}
          checked={Math.floor(this.state.turn) > turnStages.REACTION}
          onComplete={() => this.activateTurn(turnStages.FINISHED)}
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
