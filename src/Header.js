import React, { Component } from "react";

class Header extends Component {
  greeting(char) {
    if (char && char.name) return <p>Welcome, {char.name}</p>;
    return null;
  }
  render() {
    return (
      <header className="header">
        <h1>Lifecycle</h1>
        {this.greeting(this.props.char)}
      </header>
    );
  }
}

export default Header;
