import React from 'react'

import AssertBehaviour from '../../../../_patterns/behaviour/AssertBehaviour'


export default class AssertDispatchActionOnClick extends AssertBehaviour
{
  constructor(Route,obj)
  {
    super();
    this.rte = Route;
    this.action = obj
  }

  Assert()
  { this.rte.Validate().dispatchActionOnClick(this.action); }
}
