import React, { Component } from "react";
import "./scss/Menus.scss";
import ActionMenu from "./menus/Action";
import BonusActionMenu from "./menus/BonusAction";
import IntroForm from "./IntroForm";
import PHASES from "./phases";

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      phase: this.props.active ? PHASES.ACTION : PHASES.INACTIVE
    };
  }

  updateCharacter(char) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.character = char;
    this.setState(state);
  }

  render() {
    if (!this.state.character) {
      return <IntroForm submit={char => this.updateCharacter(char)} />;
    }
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
    }
    return (
      <div className="menus">
        <ActionMenu active={this.state.phase === PHASES.ACTION} />
        <BonusActionMenu active={this.state.phase === PHASES.BONUS} />
      </div>
    );
  }
}
export default Menus;
