import React from 'react'
import AssertBehaviour from '../../../../_patterns/behaviour/AssertBehaviour'


export default class AlertIsVisible extends AssertBehaviour
{
  constructor(Route,bool)
  {
    super();
    this.rte = Route;
    this.bool = bool;
  }

  Assert()
  { this.rte.Validate().alertVisible(this.bool); }
}
