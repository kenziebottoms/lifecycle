import React, { Component } from "react";
import "./scss/Menus.scss";
import ActionMenu from "./menus/Action";
import BonusActionMenu from "./menus/BonusAction";
import PHASES from "./phases";

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: this.props.active ? PHASES.ACTION : PHASES.INACTIVE
    };
  }
  render() {
    if (this.state.phase === PHASES.INACTIVE) {
      return (
        <button
          onClick={() => {
            this.setState({ phase: PHASES.ACTION });
          }}
          className="big"
        >
          It's My Turn
        </button>
      );
    } else {
      return (
        <div className="menus">
          <ActionMenu active={this.state.phase === PHASES.ACTION} />
          <BonusActionMenu active={this.state.phase === PHASES.BONUS} />
        </div>
      );
    }
  }
}

export default Menus;
