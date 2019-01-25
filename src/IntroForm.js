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
    };
    this.props.submit(char);
  }

  render() {
    return (
      <form onSubmit={e => this.saveChar(e)} id="intro">
        <h3>New app who dis</h3>
        <input type="text" name="name" placeholder="Character name" />
        <ClassDropdown />
        <RaceDropdown />
        <button type="submit">Lessgo</button>
      </form>
    );
  }
}
export default IntroForm;
