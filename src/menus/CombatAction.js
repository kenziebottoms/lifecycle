import React, { Component } from 'react';

class CombatActionMenu extends Component {
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
              disabled={this.props.disabled || !this.props.active}
              checked={this.props.checked}
              onChange={e => this.props.onComplete(e)}
            />
          </h3>
        </header>
        <article>
          <p>
            <label>
              <a
                target="blank"
                href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#MakinganAttack"
              >
                Attack.
              </a>
            </label>
            Make one{' '}
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
