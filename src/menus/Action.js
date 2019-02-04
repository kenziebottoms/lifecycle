import React, { Component } from 'react';
import MovementMenu from './Movement';
import CombatActionMenu from './CombatAction';
import constants from '../constants';
let { turnStages } = constants;

class ActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movementComplete: false,
      attackComplete: false,
    };
  }
  classes() {
    let classes = '';
    if (this.props.active) classes += 'active ';
    if (this.props.disabled) classes += 'disabled ';
    return classes;
  }
  render() {
    if (!this.props.char) return null;
    return (
      <menu id="action" className={this.classes()}>
        <header>
          <h2>
            Action
            <input
              className="turn"
              id="action"
              type="checkbox"
              disabled={this.props.disabled || !this.props.active}
              checked={
                this.props.complete &&
                this.props.turnStage !== turnStages.INACTIVE
              }
              onChange={e => this.props.onComplete(e)}
            />
          </h2>
        </header>
        <MovementMenu
          active={Math.floor(this.props.turn) === turnStages.ACTION}
          char={this.props.char}
          onSpeedChange={speed => this.props.onSpeedChange(speed)}
          complete={this.state.movementComplete}
        />
        <CombatActionMenu
          active={Math.floor(this.props.turn) === turnStages.ACTION}
          complete={this.state.attackComplete}
        />
      </menu>
    );
  }
}

export default ActionMenu;
