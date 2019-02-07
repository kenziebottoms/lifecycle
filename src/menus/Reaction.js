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
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBattlerager"
                >
                  Battleragers
                </a>{' '}
                only.
              </em>{' '}
              If you take damage from a creature within 5 feet of you, you can
              use your reaction to make a melee weapon attack against the
              creature.
            </p>
          );
        if (
          this.props.conditions.indexOf('rage') !== -1 &&
          this.props.char.level >= 6
        )
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#Rage"
                >
                  Spirit Shield.
                </a>
              </label>
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheAncestralGuardian"
                >
                  Ancestral Guardians
                </a>{' '}
                only.
              </em>{' '}
              You can use your reaction to reduce the damage done to a creature
              within 30 feet.
            </p>
          );
        break;
      case 'Bard':
        if (this.props.char.level >= 3)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofLore"
                >
                  Cutting Words.
                </a>
              </label>
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofLore"
                >
                  College of Lore
                </a>{' '}
                only.
              </em>{' '}
              TODO.
            </p>
          );
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
