import React, { Component } from "react";
import "./scss/Menus.scss";
import ActionMenu from "./menus/Action";
import BonusActionMenu from "./menus/BonusAction";
import IntroForm from "./IntroForm";
import constants from "./constants";
let { turnStages } = constants;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.char,
      phase: this.props.active ? turnStages.ACTION : turnStages.INACTIVE
    };
  }

  updateCharacter(char) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.character = char;
    this.setState(state);
    window.localStorage.setItem("lifecycleChar", JSON.stringify(char));
  }

  render() {
    if (!this.state.character) {
      return <IntroForm submit={char => this.updateCharacter(char)} />;
    }
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
