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
      phase: this.props.active ? turnStages.ACTION : turnStages.INACTIVE,
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
    if (this.state.phase === turnStages.INACTIVE) {
      return (
        <div>
          <button
            onClick={() => {
              this.setState({ phase: turnStages.ACTION });
            }}
            className="biggest"
          >
            It's My Turn
          </button>
          <button
            onClick={() => {
              this.setState({ phase: turnStages.REACTION });
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
          disabled={this.state.phase === turnStages.REACTION}
          active={this.state.phase === turnStages.ACTION}
          char={this.props.char}
          onSpeedChange={speed => this.updateSpeed(speed)}
        />
        <BonusActionMenu
          disabled={this.state.phase === turnStages.REACTION}
          active={this.state.phase === turnStages.BONUS}
        />
        <ReactionMenu
          disabled={this.state.phase !== turnStages.REACTION}
          active={this.state.phase === turnStages.REACTION}
        />
      </div>
    );
  }
}
export default Menus;
