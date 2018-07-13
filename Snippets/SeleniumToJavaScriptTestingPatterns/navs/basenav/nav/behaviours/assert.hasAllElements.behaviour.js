import React from 'react'
import AssertBehaviour from '../../../../_patterns/behaviour/AssertBehaviour'


export default class HasAllElements extends AssertBehaviour
{
  constructor(Route,section)
  {
    super();
    this.rte = Route;
    this.section = section;
  }

  Assert()
  { this.rte.Validate().hasCorrectElements(this.section); }
}
