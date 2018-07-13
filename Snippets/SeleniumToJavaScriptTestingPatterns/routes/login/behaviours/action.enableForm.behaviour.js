import React from 'react'
import ActionsBehaviour from '../../../_patterns/behaviour/ActionsBehaviour';

export default class ActionBehaviourEnableForm extends ActionsBehaviour
{
  constructor(Route)
  {
    super();
    this.rte = Route;
  }

  PerformAct()
  {
    console.log('performing formFocus act');
    this.rte.formFocus();
  }

}
