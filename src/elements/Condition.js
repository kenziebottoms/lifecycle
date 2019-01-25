import React, { Component } from 'react';
class Condition extends Component {
  render() {
    return (
      <div>
        <input
          onChange={e => console.log(e)}
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
