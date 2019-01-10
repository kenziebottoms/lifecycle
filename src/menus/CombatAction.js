import React, { Component } from "react";

class CombatActionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
  }
  render() {
    return (
      <div id="combatAction" className={this.state.active ? "active" : ""}>
        <h2>Combat Action</h2>
        <p>
          <label>Attack.</label>
          Make one melee or ranged Attack.
        </p>
        <p>
          <label>Cast a spell.</label>
          Execute a spell with a Casting Time of one action.
        </p>
        <p>
          <label>Dash.</label>
          Move extra distance equal to your walking speed.
        </p>
        <p>
          <label>Disengage.</label>
          You may move without provoking Opportunity Attacks this turn.
        </p>
        <p>
          <label>Dodge.</label>
          This turn, all attack rolls against you have Disadvantage and you have
          advantage on Dexterity Saving Throws.
        </p>
        <p>
          <label>Help.</label>
          Give another creature advantage on their next ability check to
          complete a certain task before your next turn, or give another
          creature advantage on their next attack roll before your next turn.
        </p>
        <p>
          <label>Hide.</label>
          Make a Dexterity check to{" "}
          <a href="https://roll20.net/compendium/dnd5e/Ability%20Scores#h-Hiding">
            hide
          </a>
          .
        </p>
        <p>
          <label>Ready.</label>
          Prepare a reaction to a certain circumstance or event.
        </p>
        <p>
          <label>Search.</label>
          Attempt to find something.
        </p>
        <p>
          <label>Use an object.</label>
          Use an object that requires your full attention to operate.
        </p>
      </div>
    );
  }
}

export default CombatActionMenu;
