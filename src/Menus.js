import React, { Component } from 'react';
import './scss/Menus.scss';
import ActionMenu from './menus/Action';
import BonusActionMenu from './menus/BonusAction';
import ReactionMenu from './menus/Reaction';

import constants from './constants';
let { turnStages } = constants;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: this.props.active ? turnStages.ACTION : turnStages.INACTIVE,
    };
  }

  updateCharacter(char) {
    this.props.onCharacterChange(char);
  }

  updateSpeed(speed) {
    let char = JSON.parse(JSON.stringify(this.props.char));
    char.speed = speed;
    this.props.onCharacterChange(char);
  }

  render() {
    if (!this.props.char) return null;
    if (this.state.turn === turnStages.INACTIVE) {
      return (
        <div>
          <button
            onClick={() => {
              this.setState({ turn: turnStages.ACTION });
            }}
            className="biggest"
          >
            It's My Turn
          </button>
          <button
            onClick={() => {
              this.setState({ turn: turnStages.REACTION });
            }}
            className="big"
          >
            React
          </button>
        </div>
      );
    }
    return (
      <div className="menus">
        <ActionMenu
          disabled={this.state.turn === turnStages.REACTION}
          active={this.state.turn === turnStages.ACTION}
          char={this.props.char}
          onSpeedChange={speed => this.updateSpeed(speed)}
        />
        <BonusActionMenu
          disabled={this.state.turn === turnStages.REACTION}
          active={this.state.turn === turnStages.BONUS}
        />
        <ReactionMenu
          disabled={this.state.turn !== turnStages.REACTION}
          active={this.state.turn === turnStages.REACTION}
        />
      </div>
    );
  }
}
export default Menus;
