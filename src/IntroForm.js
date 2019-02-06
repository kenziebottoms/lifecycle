import React, { Component } from 'react';
import ClassDropdown from './elements/ClassDropdown';
import RaceDropdown from './elements/RaceDropdown';
import constants from './constants';
let { turnStages } = constants;

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      class: null,
      race: null,
      level: 1,
    };
  }

  saveChar(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let char = {
      name: data.get('name'),
      class: data.get('class'),
      race: data.get('race'),
      level: data.get('level'),
    };
    this.props.submit(char);
  }

  title() {
    if (this.props.turn === turnStages.EDITING) {
      return 'Leveled Up? Transitioned? Changed Your Mind?';
    } else {
      return 'New app who dis';
    }
  }

  render() {
    if (this.props.char && this.props.turn !== turnStages.EDITING) return null;
    return (
      <form onSubmit={e => this.saveChar(e)} id="intro">
        <h3>{this.title()}</h3>
        <input
          type="text"
          name="name"
          defaultValue={this.props.char.name}
          placeholder="Character name"
        />
        <input
          type="number"
          min="1"
          max="20"
          defaultValue={this.props.char.level}
          name="level"
          placeholder="Level"
        />
        <ClassDropdown selected={this.props.char.class} />
        <RaceDropdown selected={this.props.char.race} />
        <button type="submit">Lessgo</button>
      </form>
    );
  }
}
export default IntroForm;
