import React, { Component } from 'react';
import MovementMenu from './Movement';
import CombatActionMenu from './CombatAction';
import constants from '../constants';
let { turnStages } = constants;

class ActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combat: false,
      movement: false,
    };
  }
  classes() {
    let classes = '';
    if (this.props.active) classes += 'active ';
    if (this.props.disabled) classes += 'disabled ';
    return classes;
  }
  complete(complete, turn) {
    let state = JSON.parse(JSON.stringify(this.state));
    state[turn] = complete;
    this.setState(state, function() {
      if (this.state.combat && this.state.movement) this.props.onComplete();
    });
  }
  render() {
    if (!this.props.char || this.props.turn < turnStages.INACTIVE) return null;
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
              checked={this.props.checked}
              onChange={e => this.props.onComplete(e)}
            />
          </h2>
        </header>
        <MovementMenu
          checked={this.state.movement}
          onChange={e => this.complete(e.target.checked, 'movement')}
          active={Math.floor(this.props.turn) === turnStages.ACTION}
          char={this.props.char}
          onSpeedChange={speed => this.props.onSpeedChange(speed)}
        />
        <CombatActionMenu
          char={this.props.char}
          conditions={this.props.conditions}
          checked={this.state.combat}
          onChange={e => this.complete(e.target.checked, 'combat')}
          active={Math.floor(this.props.turn) === turnStages.ACTION}
        />
      </menu>
    );
  }
}

export default ActionMenu;
