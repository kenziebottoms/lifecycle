import React, { Component } from "react";
import "./App.scss";
import Turn from "./Turn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTurn: false
    };
  }
  render() {
    return (
      <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Sarabun|Staatliches"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="app">
            <header className="header">
              <h1>Lifecycle</h1>
            </header>
            <Turn active={this.state.myTurn} />
          </div>
        </body>
      </html>
    );
  }
}

export default App;
