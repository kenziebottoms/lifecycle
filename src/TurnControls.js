import React, { Component } from 'react';
import constants from './constants';
let { turnStages } = constants;

class TurnControls extends Component {
  render() {
    if (
      !(
        this.props.turn === turnStages.INACTIVE ||
        this.props.turn === turnStages.MID_TURN ||
        this.props.turn === turnStages.FINISHED
      )
    )
      return null;
    return (
      <div>
        <button
          onClick={() => {
            this.props.activateTurn(turnStages.ACTION);
          }}
          className="biggest"
        >
          It's My Turn
        </button>
        <button
          onClick={() => {
            this.props.activateTurn(turnStages.REACTION);
          }}
          disabled={this.props.turn === turnStages.FINISHED}
          className="big"
        >
          React
        </button>
      </div>
    );
  }
}

export default TurnControls;
