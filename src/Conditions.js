import React, { Component } from "react";
import "./scss/Conditions.scss";

class Conditions extends Component {
  render() {
    return (
      <div id="conditions">
        <div>
          <input type="checkbox" id="prone" />
          <label for="prone">prone</label>
        </div>
        <div>
          <input type="checkbox" id="difficult" />
          <label for="difficult">difficult</label>
        </div>
        <div>
          <input type="checkbox" id="squeezing" />
          <label for="squeezing">squeezing</label>
        </div>
        <div>
          <input type="checkbox" id="exhausted" />
          <label for="exhausted">exhausted</label>
        </div>
        <div>
          <input type="checkbox" id="blind" />
          <label for="blind">blind</label>
        </div>
        <div>
          <input type="checkbox" id="charmed" />
          <label for="charmed">charmed</label>
        </div>
        <div>
          <input type="checkbox" id="deaf" />
          <label for="deaf">deaf</label>
        </div>
        <div>
          <input type="checkbox" id="fatigued" />
          <label for="fatigued">fatigued</label>
        </div>
        <div>
          <input type="checkbox" id="frightened" />
          <label for="frightened">frightened</label>
        </div>
        <div>
          <input type="checkbox" id="grappling" />
          <label for="grappling">grappling</label>
        </div>
        <div>
          <input type="checkbox" id="incapacitated" />
          <label for="incapacitated">incapacitated</label>
        </div>
        <div>
          <input type="checkbox" id="invisible" />
          <label for="invisible">invisible</label>
        </div>
        <div>
          <input type="checkbox" id="paralyzed" />
          <label for="paralyzed">paralyzed</label>
        </div>
        <div>
          <input type="checkbox" id="petrified" />
          <label for="petrified">petrified</label>
        </div>
        <div>
          <input type="checkbox" id="poisoned" />
          <label for="poisoned">poisoned</label>
        </div>
        <div>
          <input type="checkbox" id="restrained" />
          <label for="restrained">restrained</label>
        </div>
        <div>
          <input type="checkbox" id="stunned" />
          <label for="stunned">stunned</label>
        </div>
        <div>
          <input type="checkbox" id="unconscious" />
          <label for="unconscious">unconscious</label>
        </div>
      </div>
    );
  }
}

export default Conditions;
