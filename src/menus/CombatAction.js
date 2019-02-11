import React, { Component } from 'react';

class CombatActionMenu extends Component {
  attackCount() {
    switch (this.props.char.class) {
      case 'Barbarian':
        if (this.props.char.level >= 5) return ' (2)';
      case 'Bard':
        if (this.props.char.level >= 6)
          return ' (2 if College of Swords or Valor)';
      default:
        return '';
    }
  }
  classActions() {
    let actions = [];
    switch (this.props.char.class) {
      case 'Barbarian':
        if (this.props.char.level >= 2)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#RecklessAttack"
                >
                  Reckless Attack.
                </a>
              </label>
              This turn, make any melee attacks using strength at advantage, but
              any attack rolls against you have advantage as well.
            </p>
          );
        if (this.props.char.level >= 10)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBerserker"
                >
                  Intimidate.
                </a>
              </label>
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBerserker"
                >
                  Berserkers
                </a>{' '}
                only.
              </em>{' '}
              Attempt to frighten someone with your menacing presence.
            </p>
          );
        break;
      case 'Bard':
        if (this.props.char.level >= 6)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofWhispers"
                >
                  Mantle of Whispers.
                </a>
              </label>
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofWhispers"
                >
                  College of Whispers
                </a>{' '}
                only.
              </em>{' '}
              If you have already captured the shadow of a recently deceased
              humanoid, you may use it as a disguise for up to an hour.
            </p>
          );
        if (this.props.char.level >= 14)
          actions.push(
            <p>
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofWhispers"
                >
                  Shadow Lore.
                </a>
              </label>
              <em>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/bard#CollegeofWhispers"
                >
                  College of Whispers
                </a>{' '}
                only.
              </em>{' '}
              Attempt to charm a creature within 30 feet.
            </p>
          );
        break;
      case 'Druid':
        if (this.props.char.level >= 2)
          actions.push(
            <p
              className={
                this.props.conditions.indexOf('wild shape') === -1
                  ? ''
                  : 'disabled'
              }
            >
              <label>
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/druid#WildShape"
                >
                  Wild Shape.
                </a>
              </label>
              Magically assume the shape of a beast that you have seen before.
            </p>
          );
        break;
      default:
        break;
    }
    return actions;
  }

  render() {
    return (
      <menu id="combatAction" className={this.props.active ? 'active' : ''}>
        <header>
          <h3>
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#ActionsinCombat"
            >
              Combat Action
            </a>
            <input
              className="turn"
              id="reaction"
              type="checkbox"
              checked={this.props.checked}
              onChange={e => this.props.onChange(e)}
            />
          </h3>
        </header>
        <article>
          {this.classActions()}
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MakinganAttack"
              >
                Attack{this.attackCount()}.
              </a>
            </label>
            Make a{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MeleeAttacks"
            >
              Melee
            </a>{' '}
            or{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#RangedAttacks"
              target="blank"
            >
              Ranged
            </a>{' '}
            Attack.
          </p>
          <p
            className={
              (this.props.conditions.indexOf('wild shape') === -1 ||
                this.props.char.level >= 18) &&
              this.props.conditions.indexOf('rage') === -1
                ? ''
                : 'disabled'
            }
          >
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
            of one action.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Dash"
              >
                Dash.
              </a>
            </label>
            Move extra distance equal to your{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/monsters#Speed"
              target="blank"
            >
              Walking Speed
            </a>
            .
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Disengage"
              >
                Disengage.
              </a>
            </label>
            You may move without provoking{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#OpportunityAttacks"
            >
              Opportunity Attacks
            </a>{' '}
            this turn.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Dodge"
              >
                Dodge.
              </a>
            </label>
            This turn, all{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#AttackRolls"
              target="blank"
            >
              Attack Rolls
            </a>{' '}
            against you have{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/phb/using-ability-scores#AdvantageandDisadvantage"
            >
              Disadvantage
            </a>{' '}
            and you have advantage on dexterity{' '}
            <a
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/phb/using-ability-scores#SavingThrows"
            >
              Saving Throws
            </a>
            .
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Help"
              >
                Help.
              </a>
            </label>
            Give another creature advantage on their next{' '}
            <a
              href="https://www.dndbeyond.com/compendium/rules/phb/using-ability-scores#AbilityChecks"
              target="blank"
            >
              Ability Check
            </a>{' '}
            to complete a certain task before your next turn, or give another
            creature advantage on their next attack roll before your next turn.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Hide"
              >
                Hide.
              </a>
            </label>
            Make a dexterity check to hide.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Ready"
              >
                Ready.
              </a>
            </label>
            Prepare a reaction to a certain circumstance or event to execute
            before your next turn.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Search"
              >
                Search.
              </a>
            </label>
            Attempt to find something.
          </p>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#UseanObject"
              >
                Use an object.
              </a>
            </label>
            Use an object that requires your full attention to operate.
          </p>
        </article>
      </menu>
    );
  }
}

export default CombatActionMenu;
