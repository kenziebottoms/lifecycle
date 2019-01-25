import React, { Component } from "react";
import MovementMenu from "./Movement";
import CombatActionMenu from "./CombatAction";

class ActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movementComplete: false,
      attackComplete: false
    };
  }
  classes() {
    let classes = "";
    if (this.props.active) classes += "active ";
    if (this.props.disabled) classes += "disabled ";
    return classes;
  }
  render() {
    return (
      <div id="action" className={this.classes()}>
        <h2>Action</h2>
        <div>
          <MovementMenu
            char={this.props.char}
            onSpeedChange={speed => this.props.onSpeedChange(speed)}
            complete={this.state.movementComplete}
          />
          <CombatActionMenu complete={this.state.attackComplete} />
        </div>
      </div>
    );
  }
}

export default ActionMenu;
