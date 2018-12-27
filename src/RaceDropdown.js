import React, { Component } from "react";
import { Races } from "./data/races.json";

class RaceDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  populateRaces() {
    return Object.keys(Races).map((key, index) => {
      return (
        <option key={key} value={key}>
          {key}
        </option>
      );
    });
  }
  handleChange(e) {
    this.props.onChange(e.target.value, Races[e.target.value].speed);
  }
  render() {
    return (
      <select onChange={this.handleChange} id="races">
        <option>Select a Race</option>
        {this.populateRaces()}
      </select>
    );
  }
}
export default RaceDropdown;
