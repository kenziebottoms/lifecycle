import React, { Component } from 'react';

class MovementMenu extends Component {
  computeSpeed = () => {
    return this.props.char.speed;
  };
  render() {
    return (
      <div id="movement" className={this.props.active ? 'active' : ''}>
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
            You can move a distance up to your{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/monsters#Speed"
              target="blank"
            >
              Walking Speed
            </a>
            . You may do this at any point in your turn and you may split it up.
          </p>
          <p className="center">
            <input
              name="speed"
              type="number"
              defaultValue={this.props.char.speed}
              onBlur={e => this.props.onSpeedChange(e.target.value)}
            />
            <label htmlFor="speed">Base Speed</label>
          </p>
          <p className="center">
            <span id="speed">{this.computeSpeed()}</span>
            <label>Speed</label>
          </p>
        </section>
      </div>
    );
  }
}

export default MovementMenu;
