import React, { Component } from "react";
import classes from "./data/classes.json";

class ClassDropdown extends Component {
  populateClasses() {
    return Object.keys(classes).map((key, index) => {
      return (
        <option key={key} value={key}>
          {key}
        </option>
      );
    });
  }
  render() {
    return (
      <select name="class">
        <option>Select a Class</option>
        {this.populateClasses()}
      </select>
    );
  }
}
export default ClassDropdown;
