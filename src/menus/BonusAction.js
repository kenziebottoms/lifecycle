import React, { Component } from "react";

class BonusActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h2>Bonus Action</h2>
      </div>
    );
  }
}

export default BonusActionMenu;
