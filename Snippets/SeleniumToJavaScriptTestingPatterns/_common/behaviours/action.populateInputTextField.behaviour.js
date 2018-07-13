import React from 'react'
import ActionsBehaviour from '../../_patterns/behaviour/ActionsBehaviour'

import { inputChangeHelper } from '../../_utils/enzyme.utils'

export default class ActionPopulateInputTextField extends ActionsBehaviour
{
  constructor(Route,sel,s)
  {
    super();
    this.rte = Route;
    this.selector = sel;
    this.newVal = s;
  }

  PerformAct()
  {
    const formField = this.rte.Map[this.selector];
    console.log('formField:',formField.html());
    formField.simulate('change', inputChangeHelper(this.newVal));
  }

}
