import React, { Component } from "react";
import ClassDropdown from "./ClassDropdown";
import RaceDropdown from "./RaceDropdown";

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    return (
      <form id="intro">
        <h3>New app who dis</h3>
        <input id="name" type="text" placeholder="Name" />
        <input id="character" type="text" placeholder="Character name" />
        <ClassDropdown />
        <RaceDropdown />
      </form>
    );
  }
}
export default IntroForm;
