import React, { Component } from 'react';

class MovementMenu extends Component {
  computeSpeed = () => {
    return this.props.char.speed;
  };
  render() {
    return (
      <menu id="movement" className={this.props.active ? 'active' : ''}>
        <header>
          <h3>
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MovementandPosition"
            >
              Movement
            </a>
            <input
              className="turn"
              id="movement"
              type="checkbox"
              checked={this.props.checked}
              onChange={e => this.props.onChange(e)}
            />
          </h3>
        </header>
        <article>
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
          <div className="grid2">
            <div className="center">
              <input
                className="blue"
                name="speed"
                type="number"
                defaultValue={this.props.char.speed}
                onBlur={e => this.props.onSpeedChange(e.target.value)}
              />
              <label htmlFor="speed">Base Speed</label>
            </div>
            <div className="center">
              <input
                name="totalSpeed"
                type="number"
                value={this.computeSpeed()}
                readOnly
              />
              <label htmlFor="speed">Total Speed</label>
            </div>
          </div>
        </article>
      </menu>
    );
  }
}

export default MovementMenu;
