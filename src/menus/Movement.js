import React, { Component } from "react";

class MovementMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h2>Movement</h2>
      </div>
    );
  }
}

export default MovementMenu;
