import React, { Component } from 'react';
import constants from './constants';
let { turnStages } = constants;

class TurnControls extends Component {
  render() {
    if (
      this.props.turnStage !== turnStages.INACTIVE &&
      this.props.turnStage !== turnStages.MID_TURN &&
      this.props.turnStage !== turnStages.FINISHED
    )
      return null;
    return (
      <div>
        <button
          onClick={() => {
            this.props.activateTurnStage(turnStages.ACTION);
          }}
          className="biggest"
        >
          It's My Turn
        </button>
        <button
          onClick={() => {
            this.props.activateTurnStage(turnStages.REACTION);
          }}
          disabled={this.props.turnStage === turnStages.FINISHED}
          className="big"
        >
          React
        </button>
      </div>
    );
  }
}

export default TurnControls;
