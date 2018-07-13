import React from 'react'
import ActionsBehaviour from '../../../_patterns/behaviour/ActionsBehaviour';

export default class ActionBehaviourSubmitForm extends ActionsBehaviour
{
  constructor(Route)
  {
    super();
    this.rte = Route;
  }

  PerformAct()
  {
    console.log('performing submit form act');
    this.rte.submitForm();
  }

}
