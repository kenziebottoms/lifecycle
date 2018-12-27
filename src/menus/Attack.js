import React, { Component } from "react";

class AttackMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h2>Attack</h2>
      </div>
    );
  }
}

export default AttackMenu;
