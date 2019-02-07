import React, { Component } from 'react';
import constants from '../constants';
let { turnStages } = constants;

class ReactionMenu extends Component {
  classes() {
    let classes = '';
    if (this.props.active) classes += 'active ';
    if (this.props.disabled) classes += 'disabled ';
    return classes;
  }
  classActions() {
    let actions = [];
    switch (this.props.char.class) {
      case 'Barbarian':
        if (this.props.char.level >= 14)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#RecklessAttack"
                >
                  Retaliate.
                </a>
              </label>
              If you take damage from a creature within 5 feet of you, you can
              use your reaction to make a melee weapon attack against the
              creature.
            </p>
          );
        break;
      default:
        break;
    }
    return actions;
  }
  render() {
    if (!this.props.char || this.props.turn < turnStages.INACTIVE) return null;
    return (
      <menu className={this.classes()}>
        <header>
          <h2>
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Reactions"
            >
              Reaction
            </a>
            <input
              className="turn"
              id="reaction"
              type="checkbox"
              disabled={this.props.disabled || !this.props.active}
              checked={this.props.checked}
              onChange={e => this.props.onComplete(e)}
            />
          </h2>
        </header>
        <article>
          {this.classActions()}
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#OpportunityAttacks"
              >
                Opportunity Attack.
              </a>
            </label>
            Make one{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MeleeAttacks"
            >
              Melee Attack
            </a>{' '}
            against a creature who hasn't{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Disengage"
              target="blank"
            >
              Disengaged
            </a>{' '}
            as it moves out of your reach.
          </p>
        </article>
      </menu>
    );
  }
}

export default ReactionMenu;
