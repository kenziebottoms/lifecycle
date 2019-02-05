import React, { Component } from 'react';
import constants from './constants';
let { turnStages } = constants;

class Header extends Component {
  greeting() {
    if (!this.props.char || !this.props.char.name) return null;
    return (
      <p>
        Welcome,{' '}
        <span className="link" onClick={() => this.props.editChar()}>
          {this.props.char.name}
        </span>
      </p>
    );
  }
  level() {
    if (
      !this.props.char ||
      !this.props.char.level ||
      this.turn < turnStages.INACTIVE
    )
      return null;
    return <span className="badge">{this.props.char.level}</span>;
  }
  render() {
    return (
      <header className="header">
        <h1>Lifecycle</h1>
        {this.greeting()}
        {this.level()}
      </header>
    );
  }
}

export default Header;
