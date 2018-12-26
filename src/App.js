import React, { Component } from "react";
import "./App.scss";

class App extends Component {
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
          </div>
        </body>
      </html>
    );
  }
}

export default App;
