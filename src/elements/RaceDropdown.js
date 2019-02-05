import React, { Component } from 'react';
import { Races } from '../data/races.json';

class RaceDropdown extends Component {
  populateRaces() {
    return Object.keys(Races).map((key, index) => {
      return (
        <option key={key} value={key}>
          {key}
        </option>
      );
    });
  }
  render() {
    return (
      <select name="race" id="races" defaultValue={this.props.selected}>
        <option>Select a Race</option>
        {this.populateRaces()}
      </select>
    );
  }
}
export default RaceDropdown;
