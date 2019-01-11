import React, { Component } from "react";

class ReactionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
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
      <div className={this.classes()}>
        <h2>Reaction</h2>
        <section>
          <p>
            <label>Opportunity Attack.</label>
            Make one Melee Attack against a creature who hasn't Disengaged as it
            moves out of your reach.
          </p>
        </section>
      </div>
    );
  }
}

export default ReactionMenu;
