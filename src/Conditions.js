import React, { Component } from "react";
import "./scss/Conditions.scss";

class Conditions extends Component {
  render() {
    return (
      <div id="conditions">
        <div>
          <input type="checkbox" id="prone" />
          <label htmlFor="prone">prone</label>
        </div>
        <div>
          <input type="checkbox" id="difficult" />
          <label htmlFor="difficult">difficult</label>
        </div>
        <div>
          <input type="checkbox" id="squeezing" />
          <label htmlFor="squeezing">squeezing</label>
        </div>
        <div>
          <input type="checkbox" id="exhausted" />
          <label htmlFor="exhausted">exhausted</label>
        </div>
        <div>
          <input type="checkbox" id="blind" />
          <label htmlFor="blind">blind</label>
        </div>
        <div>
          <input type="checkbox" id="charmed" />
          <label htmlFor="charmed">charmed</label>
        </div>
        <div>
          <input type="checkbox" id="deaf" />
          <label htmlFor="deaf">deaf</label>
        </div>
        <div>
          <input type="checkbox" id="fatigued" />
          <label htmlFor="fatigued">fatigued</label>
        </div>
        <div>
          <input type="checkbox" id="frightened" />
          <label htmlFor="frightened">frightened</label>
        </div>
        <div>
          <input type="checkbox" id="grappling" />
          <label htmlFor="grappling">grappling</label>
        </div>
        <div>
          <input type="checkbox" id="incapacitated" />
          <label htmlFor="incapacitated">incapacitated</label>
        </div>
        <div>
          <input type="checkbox" id="invisible" />
          <label htmlFor="invisible">invisible</label>
        </div>
        <div>
          <input type="checkbox" id="paralyzed" />
          <label htmlFor="paralyzed">paralyzed</label>
        </div>
        <div>
          <input type="checkbox" id="petrified" />
          <label htmlFor="petrified">petrified</label>
        </div>
        <div>
          <input type="checkbox" id="poisoned" />
          <label htmlFor="poisoned">poisoned</label>
        </div>
        <div>
          <input type="checkbox" id="restrained" />
          <label htmlFor="restrained">restrained</label>
        </div>
        <div>
          <input type="checkbox" id="stunned" />
          <label htmlFor="stunned">stunned</label>
        </div>
        <div>
          <input type="checkbox" id="unconscious" />
          <label htmlFor="unconscious">unconscious</label>
        </div>
      </div>
    );
  }
}

export default Conditions;
