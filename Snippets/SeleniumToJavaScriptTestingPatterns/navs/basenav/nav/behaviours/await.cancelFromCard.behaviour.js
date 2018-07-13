import React from 'react';
import e2eValidator from '../validator.e2e'
import AwaitableAssertableActionBehaviour from '../../../../_patterns/behaviour/AwaitableAssertableActionBehaviour'

import { enzymeElement } from  '../../../../_utils/enzyme.utils'

import SinonSingleton from '../../../../_patterns/singleton/singletonBase.pattern'
import AlertCards from '../../../../../client/components/alerts/AlertCards'

export default class AwaitBehaviourCanCycleThroughAlerts extends AwaitableAssertableActionBehaviour
{
  /* Leave Below Untouched */
  constructor(Route,o={})
  { super(Route,o); }

  PerformYields(arr,rte,o)
  {
    var gE = generateExecution();
    for(let i=0; i<arr.length; i++)
    { console.log(gE.next().value); }

    function* generateExecution()
    {
      var curStart = 0;
      while(true)
      {
        var cur = curStart++;
        yield* eval(arr[cur])()
      }
    }
    /* Leave Above Untouched */

    function* PerformPreAwaitAction()
    {
      yield 'click on alert icon'
    }

    function* PerformPreAwaitAssert()
    {
      yield 'SPY / wait for & Verify dropdown open'
    }

    function* PerformAwaitAction()
    {
      yield 'click cancel, click no'
    };
    function* PerformAwaitAssert()
    {
      yield 'verify can click buttons again'
    };
    function* PerformPostAwaitAction()
    {
      yield 'click cancel, click on yes'
    };
    function* PerformPostAwaitAssert()
    {
      yield 'verify cancelled'
    };
  }
}
