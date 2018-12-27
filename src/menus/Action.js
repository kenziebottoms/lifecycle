import React, { Component } from "react";
import MovementMenu from "./Movement";
import AttackMenu from "./Attack";

class ActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      movementComplete: false,
      attackComplete: false
    };
  }
  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h2>Action</h2>
        <div id="action">
          <MovementMenu complete={this.state.movementComplete} />
          <AttackMenu complete={this.state.attackComplete} />
        </div>
      </div>
    );
  }
}

export default ActionMenu;
