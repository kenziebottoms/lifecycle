import React, { Component } from "react";
import ClassDropdown from "./ClassDropdown";
import RaceDropdown from "./RaceDropdown";

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 30,
      name: null,
      class: null,
      race: null
    };
    this.updateClass = this.updateClass.bind(this);
    this.updateRace = this.updateRace.bind(this);
    this.saveChar = this.saveChar.bind(this);
  }

  updateClass(charClass) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.class = charClass;
    this.setState(state);
  }

  updateRace(race, speed) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.race = race;
    state.speed = speed;
    this.setState(state);
  }

  saveChar(e) {
    e.preventDefault();
    let char = {
      speed: this.state.speed,
      name: this.state.name,
      class: this.state.class,
      race: this.state.race
    };
    this.props.submit(char);
  }

  render() {
    return (
      <form id="intro">
        <h3>New app who dis</h3>
        <input
          value={this.state.name}
          type="text"
          placeholder="Character name"
        />
        <ClassDropdown onChange={this.updateClass} />
        <RaceDropdown onChange={this.updateRace} />
        <label htmlFor="speed">Walking Speed</label>
        <section>
          <input id="speed" type="number" value={this.state.speed} readOnly />{" "}
          feet
        </section>
        <button type="submit" onClick={this.saveChar}>
          Lessgo
        </button>
      </form>
    );
  }
}
export default IntroForm;
