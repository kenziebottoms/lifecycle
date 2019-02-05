import React, { Component } from 'react';

class Header extends Component {
  greeting() {
    if (!this.props.char || !this.props.char.name) return null;
    return <p>Welcome, {this.props.char.name}</p>;
  }
  level() {
    if (!this.props.char || !this.props.char.level) return null;
    return <span class="badge">{this.props.char.level}</span>;
  }
  render() {
    return (
      <header className="header">
        <h1>Lifecycle</h1>
        {this.level()}
        {this.greeting()}
      </header>
    );
  }
}

export default Header;
