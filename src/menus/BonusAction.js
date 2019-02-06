import React, { Component } from 'react';
import constants from '../constants';
let { turnStages } = constants;

class BonusActionMenu extends Component {
  classes() {
    let classes = '';
    if (this.props.active) classes += 'active ';
    if (this.props.disabled) classes += 'disabled ';
    return classes;
  }

  classActions() {
    switch (this.props.char.class) {
      case 'Druid':
        if (this.props.char.level < 2) return null;
        if (this.props.conditions.indexOf('wild shape') === -1) return null;
        return (
          <p>
            <label>
              End{' '}
              <a
                target="blank"
                href="https://www.dndbeyond.com/characters/classes/druid#WildShape"
              >
                Wild Shape.
              </a>
            </label>
            Revert to your humanoid form.
          </p>
        );
      case 'Barbarian':
        return (
          <p>
            <label>
              Enter a{' '}
              <a
                target="blank"
                href="https://www.dndbeyond.com/characters/classes/barbarian#Rage"
              >
                Rage.
              </a>
            </label>
            For the next minute, you have advantage on strength checks and
            strength saving throws, have resistance to bludgeoning, piercing,
            and slashing damage, and gain a{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/characters/classes/barbarian#TheBarbarianTable"
            >
              Rage Damage
            </a>{' '}
            bonus to all melee attacks.
          </p>
        );
      default:
        console.log(this.props.char.race);
        return;
    }
  }

  render() {
    if (!this.props.char || this.props.turn < turnStages.INACTIVE) return null;
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
          {this.classActions()}
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
