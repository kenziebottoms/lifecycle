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
  }

  updateRace(race, speed) {
    let state = JSON.parse(JSON.stringify(this.state));
    state.race = race;
    state.speed = speed;
    this.setState(state);
  }

  saveChar(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let char = {
      speed: data.get("speed"),
      name: data.get("name"),
      class: data.get("class"),
      race: data.get("race")
    };
    this.props.submit(char);
  }

  render() {
    return (
      <form onSubmit={e => this.saveChar(e)} id="intro">
        <h3>New app who dis</h3>
        <input
          defaultValue={this.state.name}
          type="text"
          name="name"
          placeholder="Character name"
        />
        <ClassDropdown />
        <RaceDropdown onChange={e => this.updateRace(e)} />
        <label htmlFor="speed">Walking Speed</label>
        <section>
          <input name="speed" type="number" defaultValue={this.state.speed} />
          feet
        </section>
        <button type="submit">Lessgo</button>
      </form>
    );
  }
}
export default IntroForm;
