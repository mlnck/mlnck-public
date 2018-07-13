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
      //mock data in previous await so one of each type alert is waiting in the cards
        //will allow you to open, go to next, go to next, then close
      yield 'SPY / wait for & Verify dropdown open with warning level one type'
    }

    function* PerformAwaitAction()
    {
      let actions = ['APPROVE','MODIFY','CANCEL RIDE']
      yield 'click buttons, dispatch actions'
    };
    function* PerformAwaitAssert()
    {
      yield 'SPY / wait for & Verify correct actions dispatched'
    };
    function* PerformPostAwaitAction()
    {
      yield 'click on next iteration button`'
    };
    function* PerformPostAwaitAssert()
    {
      yield 'verify new content in card'
    };
  }
}
