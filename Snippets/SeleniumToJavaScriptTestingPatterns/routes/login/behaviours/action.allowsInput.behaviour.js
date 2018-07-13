import React from 'react'
import ActionsBehaviour from '../../../_patterns/behaviour/ActionsBehaviour';

export default class ActionBehaviourAllowsInput extends ActionsBehaviour
{
  constructor(Route,o)
  {
    super();
    this.rte = Route;
    this.newVal = o;
  }

  PerformAct()
  {
    console.log('performing changeInputVal act',this.newVal);
    this.rte.changeInputVal(this.newVal);
  }

}
