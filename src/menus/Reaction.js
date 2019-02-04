import React, { Component } from 'react';

class ReactionMenu extends Component {
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
              target="blank"
              href="https://www.dndbeyond.com/compendium/rules/basic-rules/combat#Reactions"
            >
              Reaction
            </a>
          </h2>
        </header>
        <article>
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
