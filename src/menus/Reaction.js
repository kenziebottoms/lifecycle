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
        <h2>
          <a
            target="blank"
            href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Reactions"
          >
            Reaction
          </a>
        </h2>
        <section>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#OpportunityAttacks"
              >
                Opportunity Attack.
              </a>
            </label>
            Make one{" "}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MeleeAttacks"
            >
              Melee Attack
            </a>{" "}
            against a creature who hasn't{" "}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Disengage"
              target="blank"
            >
              Disengaged
            </a>{" "}
            as it moves out of your reach.
          </p>
        </section>
      </div>
    );
  }
}

export default ReactionMenu;
