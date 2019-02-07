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
    let actions = [];
    switch (this.props.char.class) {
      case 'Barbarian':
        if (this.props.conditions.indexOf('rage') === -1) {
          actions.push(
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
              bonus to all melee attacks. Uses are limited according to level
              per long rest.
            </p>
          );
        } else {
          actions.push(
            <p>
              <label>
                End{' '}
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#Rage"
                >
                  Rage.
                </a>
              </label>
              End your rage early.
            </p>
          );
          if (this.props.char.level >= 3)
            actions.push([
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#Rage"
                  >
                    Frenzy.
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
                For the rest of your rage, you can make a melee weapon attack as
                a bonus action each turn. You are Exhausted after the rage ends.
              </p>,
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheTotemWarrior"
                  >
                    Totem Ability.
                  </a>
                </label>
                <em>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheTotemWarrior"
                  >
                    Totem Warriors
                  </a>{' '}
                  only.
                </em>{' '}
                Use the ability granted to you by your totem spirit.
              </p>,
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBattlerager"
                  >
                    Battlerager Armor.
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
                If you are wearing spiked armor, you can use a bonus action to
                make a melee weapon attack with your armor spikes against a
                target within 5 feet of you.
              </p>,
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheStormHerald"
                  >
                    Storm Aura.
                  </a>
                </label>
                <em>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheStormHerald"
                  >
                    Storm Heralds
                  </a>{' '}
                  only.
                </em>{' '}
                Reactivate the effect of your chosen{' '}
                <a
                  target="blank"
                  href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheStormHerald"
                >
                  Storm Aura
                </a>
                .
              </p>,
            ]);
          if (this.props.char.level >= 10)
            actions.push([
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Dash"
                  >
                    Battlerager Charge.
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
                Move extra distance equal to your{' '}
                <a
                  href="https://www.dndbeyond.com/compendium/rules/basic-rules/monsters#Speed"
                  target="blank"
                >
                  Walking Speed
                </a>
                .
              </p>,
              <p>
                <label>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheZealot"
                  >
                    Zealous Presence.
                  </a>
                </label>
                <em>
                  <a
                    target="blank"
                    href="https://www.dndbeyond.com/characters/classes/barbarian#PathoftheZealot"
                  >
                    Zealots
                  </a>{' '}
                  only.
                </em>{' '}
                Unleash a battle cry infused with divine energy. This turn, up
                to ten other creatures within 60 feet gain advantage on attack
                rolls and saving throws.
              </p>,
            ]);
        }
        break;
      case 'Druid':
        if (this.props.conditions.indexOf('wild shape') !== -1)
          actions.push(
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
            of one bonus action.
          </p>
        </article>
      </menu>
    );
  }
}

export default BonusActionMenu;
