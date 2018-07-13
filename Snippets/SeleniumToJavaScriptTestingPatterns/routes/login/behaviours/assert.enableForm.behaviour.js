import React from 'react'
import AssertBehaviour from '../../../_patterns/behaviour/AssertBehaviour';

export default class AssertBehaviourEnableForm extends AssertBehaviour
{
  constructor(Route)
  {
    super();
    this.rte = Route;
  }

  Assert()
  {
    console.log('performing formFocus assert');
    this.rte.Validate().hasInputField();
  }
}
