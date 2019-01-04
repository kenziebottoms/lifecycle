import React, { Component } from "react";
import "./scss/Menus.scss";
import ActionMenu from "./menus/Action";
import BonusActionMenu from "./menus/BonusAction";

import constants from "./constants";
let { turnStages } = constants;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: this.props.active ? turnStages.ACTION : turnStages.INACTIVE
    };
  }

  updateCharacter(char) {
    this.props.onCharacterChange(char);
  }

  render() {
    if (!this.props.char) return null;
    if (this.state.phase === turnStages.INACTIVE) {
      return (
        <button
          onClick={() => {
            this.setState({ phase: turnStages.ACTION });
          }}
          className="big"
        >
          It's My Turn
        </button>
      );
    }
    return (
      <div className="menus">
        <ActionMenu active={this.state.phase === turnStages.ACTION} />
        <BonusActionMenu active={this.state.phase === turnStages.BONUS} />
      </div>
    );
  }
}
export default Menus;
