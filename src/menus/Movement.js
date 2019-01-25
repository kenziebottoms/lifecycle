import React, { Component } from "react";

class MovementMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: this,
      active: this.props.active
    };
  }
  render() {
    return (
      <div className={this.state.active ? "active" : ""}>
        <h2>
          <a
            target="blank"
            href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MovementandPosition"
          >
            Movement
          </a>
        </h2>
        <section>
          <p>
            You can move a distance up to your{" "}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/monsters#Speed"
              target="blank"
            >
              Walking Speed
            </a>
            . You may do this at any point in your turn and you may split it up.
          </p>
          <p>
            <input
              type="number"
              defaultValue={this.props.char.speed}
              onBlur={e => this.props.onSpeedChange(e.target.value)}
            />
          </p>
        </section>
      </div>
    );
  }
}

export default MovementMenu;
