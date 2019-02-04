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
      turnStage: store ? store.turnStage : turnStages.INACTIVE,
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
    let char = JSON.parse(JSON.stringify(this.props.char));
    char.speed = speed;
    this.updateCharacter(char);
  }

  updateConditions(conditions) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.conditions = conditions;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  activateTurnStage(turnStage) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.turnStage = turnStage;
    this.setState(state);
    window.localStorage.setItem(localStorageVariable, JSON.stringify(state));
  }

  render() {
    return (
      <div className="app">
        <Header char={this.state.char} />

        <TurnControls
          activateTurnStage={turnStage => this.activateTurnStage(turnStage)}
          turnStage={this.state.turnStage}
        />

        <Conditions
          char={this.state.char}
          conditions={this.state.conditions}
          updateConditions={conditions => this.updateConditions(conditions)}
        />

        <ActionMenu
          active={Math.floor(this.state.turnStage) === turnStages.ACTION}
          disabled={Math.floor(this.state.turnStage) === turnStages.REACTION}
          char={this.state.char}
          onSpeedChange={speed => this.updateSpeed(speed)}
        />
        <BonusActionMenu
          char={this.state.char}
          active={Math.floor(this.state.phase) === turnStages.BONUS}
          disabled={Math.floor(this.state.phase) === turnStages.REACTION}
        />
        <ReactionMenu
          char={this.state.char}
          active={Math.floor(this.state.phase) === turnStages.REACTION}
          disabled={Math.floor(this.state.phase) !== turnStages.REACTION}
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
