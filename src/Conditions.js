import React, { Component } from 'react';
import Condition from './elements/Condition';
import './scss/Conditions.scss';
const conditions = [
  'prone',
  'difficult',
  'squeezing',
  'exhausted',
  'blind',
  'charmed',
  'deaf',
  'fatigued',
  'frightened',
  'grappling',
  'incapacitated',
  'invisible',
  'paralyzed',
  'petrified',
  'poisoned',
  'restrained',
  'stunned',
  'unconscious',
];

class Conditions extends Component {
  constructor(props) {
    super(props);
    if (this.props.char.class === 'Druid' && this.props.char.level >= 2) {
      conditions.push('wild shape');
    }
  }

  getConditionSet = () =>
    new Set(JSON.parse(JSON.stringify(this.props.conditions || null)));

  addCondition = condition => {
    let conditions = this.getConditionSet();
    conditions.add(condition);
    this.props.updateConditions(Array.from(conditions));
  };

  removeCondition = condition => {
    let conditions = this.getConditionSet();
    conditions.delete(condition);
    this.props.updateConditions(Array.from(conditions));
  };

  isAfflicted = condition => {
    let conditions = this.getConditionSet();
    return conditions.has(condition);
  };

  renderConditions = () => {
    return conditions.map(condition => {
      return (
        <Condition
          key={condition}
          active={this.isAfflicted(condition)}
          value={condition}
          activate={() => this.addCondition(condition)}
          deactivate={() => this.removeCondition(condition)}
        />
      );
    });
  };

  render() {
    if (!this.props.char) return null;
    return <div id="conditions">{this.renderConditions()}</div>;
  }
}

export default Conditions;
