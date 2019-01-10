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
        <p>
          You can move a distance up to your walking speed. You may do this at
          any point in your turn and you may split it up.
        </p>
      </div>
    );
  }
}

export default MovementMenu;
