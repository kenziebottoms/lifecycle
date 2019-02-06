import React, { Component } from 'react';

class Condition extends Component {
  onChange = e =>
    e.target.checked ? this.props.activate() : this.props.deactivate();

  render() {
    return (
      <div>
        <input
          onChange={e => this.onChange(e)}
          checked={this.props.active}
          type="checkbox"
          id={this.props.value}
        />
        <label htmlFor={this.props.value}>{this.props.value}</label>
      </div>
    );
  }
}

export default Condition;
