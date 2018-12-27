import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  greeting(user) {
    if (user && user.name) return <h3>Welcome, {user.name}</h3>;
    return null;
  }
  render() {
    return (
      <header className="header">
        <h1>Lifecycle</h1>
        {this.greeting(this.state.user)}
      </header>
    );
  }
}

export default Header;
