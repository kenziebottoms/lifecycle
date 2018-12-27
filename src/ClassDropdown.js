import React, { Component } from "react";
import classes from "./data/classes.json";

class ClassDropdown extends Component {
  populateClasses() {
    return Object.keys(classes).map((key, index) => {
      return (
        <option key={index} value={index}>
          {key}
        </option>
      );
    });
  }
  render() {
    return <select id="classes">{this.populateClasses()}</select>;
  }
}
export default ClassDropdown;
