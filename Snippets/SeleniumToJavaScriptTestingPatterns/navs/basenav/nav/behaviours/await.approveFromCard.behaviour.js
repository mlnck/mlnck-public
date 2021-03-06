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
      yield 'this will need to be more in depth'
    };
    function* PerformAwaitAssert()
    {
      yield 'in depth Verify new content'
    };
    function* PerformPostAwaitAction()
    {
      yield 'click on submit'
    };
    function* PerformPostAwaitAssert()
    {
      yield 'verify submitted info'
    };
  }
}
