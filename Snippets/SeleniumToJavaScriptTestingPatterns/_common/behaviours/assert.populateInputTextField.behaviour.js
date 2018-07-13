import React from 'react'
import AssertBehaviour from '../../_patterns/behaviour/AssertBehaviour'


export default class AssertPopulateInputTextField extends AssertBehaviour
{
  constructor(Route,o)
  {
    super();
    this.rte = Route;
    this.newVal = o;
  }

  Assert()
  {
    console.log('performing allows input assert:',this.newVal);
    this.rte.Validate().wasChanged(this.newVal);
  }

}
