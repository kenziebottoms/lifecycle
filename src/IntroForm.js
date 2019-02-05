import React, { Component } from 'react';
import ClassDropdown from './elements/ClassDropdown';
import RaceDropdown from './elements/RaceDropdown';

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      class: null,
      race: null,
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

  render() {
    if (!this.props.char) {
      return (
        <form onSubmit={e => this.saveChar(e)} id="intro">
          <h3>New app who dis</h3>
          <input type="text" name="name" placeholder="Character name" />
          <input
            type="number"
            min="1"
            max="20"
            name="level"
            placeholder="Level"
          />
          <ClassDropdown />
          <RaceDropdown />
          <button type="submit">Lessgo</button>
        </form>
      );
    } else {
      return null;
    }
  }
}
export default IntroForm;
