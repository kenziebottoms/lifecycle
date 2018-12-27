import React, { Component } from "react";
import { Races } from "./data/races.json";

class RaceDropdown extends Component {
  populateRaces() {
    return Object.keys(Races).map((key, index) => {
      return (
        <option key={index} value={index}>
          {key}
        </option>
      );
    });
  }
  render() {
    return <select id="classes">{this.populateRaces()}</select>;
  }
}
export default RaceDropdown;
