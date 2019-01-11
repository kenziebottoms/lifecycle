import React, { Component } from "react";

class BonusActionMenu extends Component {
  classes() {
    let classes = "";
    if (this.props.active) classes += "active ";
    if (this.props.disabled) classes += "disabled ";
    return classes;
  }
  render() {
    return (
      <div className={this.classes()}>
        <h2>Bonus Action</h2>
        <section>
          <p>
            <label>Cast a spell.</label>
            Execute a spell with a Casting Time of one bonus action.
          </p>
        </section>
      </div>
    );
  }
}

export default BonusActionMenu;
