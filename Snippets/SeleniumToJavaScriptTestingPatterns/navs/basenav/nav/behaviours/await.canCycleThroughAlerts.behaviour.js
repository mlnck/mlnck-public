import React from 'react';
import e2eValidator from '../validator.e2e'
import BehaviourExecutor from '../../../../_patterns/behaviour/BehaviourExecutor'
import AwaitableAssertableActionBehaviour from '../../../../_patterns/behaviour/AwaitableAssertableActionBehaviour'

import { enzymeElement,setState } from  '../../../../_utils/enzyme.utils'

import SinonSingleton from '../../../../_patterns/singleton/singletonBase.pattern'
import {sinonUtils} from '../../../../_utils/sinon.utils'
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
      rte.Validate('Alerts Start Closed').elementHasClass(rte.Map.directAlerts,'active',false)
      rte.Validate('With NO Card Markup').elementExists(rte.Map.directAlertCard,false)
      yield rte.Map.directAlerts.simulate('click')
    }

    function* PerformPreAwaitAssert()
    {
      setState(rte,{loadingAlerts:false}) //we beat the nested returns even yielding from above - manually set
      rte.Validate('Alerts Update Classes').elementHasClass(rte.Map.directAlerts,'active',true)
      rte.Validate('And Has Card Markup').elementExists(rte.Map.directAlertCard,true)
      yield true
    }

    function* PerformAwaitAction()
    {
      rte.Validate('Navigation Arrows Exists').elementExists(rte.Map.directAlertNextButton,true)
      rte.Validate('Navigation Previous Arrow is Disabled').elementHasClass(rte.Map.directAlertPrevButton,'disabled',true)
      rte.Validate('Initial Title is Displayed').elementHasString(rte.Map.directAlertCardTitle.get(0).props.children[0],'Failed Pickup',1)
      // This would be a horrible test to use this on (when we start querying for updated data)
      // but rte has all component methods available to it:
        //rte.Snap();
      yield rte.Map.directAlertNextButton.simulate('click');//click right arrow
    };
    function* PerformAwaitAssert()
    {
      rte.Validate('Navigation Previous Arrow is Ensabled').elementHasClass(rte.Map.directAlertPrevButton,'disabled',false)
      rte.Validate('New Card Title is Displayed').elementHasString(rte.Map.directAlertCardTitle.get(0).props.children[0],'Price Warning',1)
      yield true
    };
    function* PerformPostAwaitAction()
    {
      //click view all alerts
        //hitbox and close will be tested later
      yield rte.Map.directAlertCardViewAll.simulate('click');
    };
    function* PerformPostAwaitAssert()
    {
      rte.Validate('Card Is Off Out of DOM').elementExists(rte.Map.directAlertCard,false)
      yield 'verify route update'
    };
  }
}
