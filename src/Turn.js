import React, { Component } from "react";
import ActionMenu from "./menus/Action";
import BonusActionMenu from "./menus/BonusAction";

class Turn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTurn: this.props.myTurn
    };
  }
  render() {
    if (this.state.myTurn) {
      return (
        <div class="menus">
          <ActionMenu />
          <BonusActionMenu />
        </div>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.setState({ myTurn: true });
          }}
          className="big"
        >
          It's My Turn
        </button>
      );
    }
  }
}

export default Turn;
