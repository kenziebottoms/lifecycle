import React, { Component } from "react";
import classes from "./data/classes.json";

class ClassDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  populateClasses() {
    return Object.keys(classes).map((key, index) => {
      return (
        <option key={key} value={key}>
          {key}
        </option>
      );
    });
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <select onChange={this.handleChange} id="classes">
        <option>Select a Class</option>
        {this.populateClasses()}
      </select>
    );
  }
}
export default ClassDropdown;
