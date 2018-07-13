import React from 'react';
import AwaitableAssertableActionBehaviour from '../../../_patterns/behaviour/AwaitableAssertableActionBehaviour';

import ChangeInput from './action.allowsInput.behaviour'
import InputChanged from './assert.allowsInput.behaviour'
import SubmitForm from './action.submitForm.behaviour'

export default class AwaitBehaviourFormPopulateAndSubmit extends AwaitableAssertableActionBehaviour
{
  constructor(o={})
  { super(o); }

  PerformPreAwaitAction(o)
  {
    const pPAAction = new ChangeInput(o.loginBase,o);
    return pPAAction.Execute();
  };

  PerformPreAwaitAssert(o)
  {
    const pPAAssert = new InputChanged(o.loginBase,o);
    return pPAAssert.Execute();
  };
  PerformAwaitAction(o){
    // const pAA = new LandingPageEnableFormAction(o.landingPage);
    // pAA.Execute();
    //
    // return new Promise(function(resolve,reject){
    //   console.log('allowing for fuzzy logic population timeout to be applied');
    //   setTimeout(
    //     resolve(o.promisePointer('promiseSuccess')),
    //   3000)
    // });
  };
  PerformAwaitAssert(o)
  {
    // console.log('wait----after promise');
    // const pPAAssert = new LandingPageAllowsInputAssert(o.landingPage,o.newInputVal);
    // return pPAAssert.Execute();

    // return setTimeout(function(){ o.promisePointer('YES')},1500);
    // this.landingPage.Validate().
  };
  PerformPostAwaitAction()
  {
    return new Promise(function(resolve,reject){
      console.log('running5!');
      setTimeout(
        resolve({turtle:'soup1' }),
      3000)
    });
  };
  PerformPostAwaitAssert()
  {
    for(let i=0; i<100;i++)
    {
      console.log('running6--',i);
      if(i===63){ return(i+'!X!X!X') }
    }
  };
}
