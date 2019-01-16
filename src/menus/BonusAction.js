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
        <h2>
          <a
            href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#BonusActions"
            target="blank"
          >
            Bonus Action
          </a>
        </h2>
        <section>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#CastaSpell"
              >
                Cast a spell.
              </a>
            </label>
            Execute a spell with a{" "}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/spellcasting#CastingTime"
            >
              Casting Time
            </a>{" "}
            of one bonus action.
          </p>
        </section>
      </div>
    );
  }
}

export default BonusActionMenu;
