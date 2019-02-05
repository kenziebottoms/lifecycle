import React, { Component } from 'react';

class BonusActionMenu extends Component {
  classes() {
    let classes = '';
    if (this.props.active) classes += 'active ';
    if (this.props.disabled) classes += 'disabled ';
    return classes;
  }
  render() {
    if (!this.props.char) return null;
    return (
      <menu className={this.classes()}>
        <header>
          <h2>
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#BonusActions"
              target="blank"
            >
              Bonus Action
            </a>
            <input
              className="turn"
              id="bonus"
              type="checkbox"
              disabled={this.props.disabled || !this.props.active}
              checked={this.props.checked}
              onChange={e => this.props.onComplete(e)}
            />
          </h2>
        </header>
        <article>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#CastaSpell"
              >
                Cast a spell.
              </a>
            </label>
            Execute a spell with a{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/spellcasting#CastingTime"
            >
              Casting Time
            </a>{' '}
            of one bonus action.
          </p>
        </article>
      </menu>
    );
  }
}

export default BonusActionMenu;
