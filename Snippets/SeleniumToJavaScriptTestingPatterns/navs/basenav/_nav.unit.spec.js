import * as rTD from '../../_utils/realTimeData.utils'

import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
import unitValidator from './nav/validator.unit'

import NavigationSingleton from '../../_patterns/singleton/singletonBase.pattern.js'

//Behaviours
  //We will probably never have to use behaviours with unit tests.
    //But on the off chance we need to, it is possible using the below as an example
import AssertHasAllElements from './nav/behaviours/assert.hasAllElements.behaviour'
import AssertHasAllProps from './nav/behaviours/assert.hasAllProps.behaviour'
import AlertIsVisible from './nav/behaviours/assert.AlertIsVisible.behaviour'

//helpers
import CommonActionPopulateInputTextField from '../../_common/behaviours/action.populateInputTextField.behaviour'

import { TopNav,SideBar,SideBarPII,FooterNav,FooterNavNoReload } from './nav/base'

beforeAll((done) => {
  rTD.setUserCredentials()
    .then(()=>{ done(); })
    .catch((err) => { console.error(err); done();} )
});

describe('Site Navigation', () => {
  let behaviourExecutor,
      navBase;

  beforeEach((done) => {
    behaviourExecutor = new BehaviourExecutor()

    rTD.setPageProperties('nav')
      .then(()=>
      {
        NavigationSingleton.remove('fullPageData')
        const fullPageData =rTD.mergeState(NavigationSingleton.get('userData').app, NavigationSingleton.get('pageData').app)
        NavigationSingleton.add(fullPageData,'fullPageData')
        done();
      })
      .catch((err) => { console.error(err); done();} )
  })

  describe('Top Bar Navigation', () => {
    beforeEach(() => navBase = new TopNav(unitValidator,'render'));

    test.skip('Correct Base Objects Exists', () =>{
      behaviourExecutor.Execute([
        new AssertHasAllElements(navBase,'topNav'),
        new AssertHasAllProps(navBase,'topNav'),
      ])
    })

    test.skip('Alert Should Display Number of Alerts if > 0', () =>{
      behaviourExecutor.Execute([ new AlertIsVisible(navBase,true) ]);
    })
    test('Alert Number and Circle Should be Hidden if Zero Alerts', () =>{
      behaviourExecutor.Execute([ new AlertIsVisible(navBase,false) ]);
    })

    test('Account Link Should Display Avatar & User Name', ()=>{
      navBase.Validate().accountHasUserInfo();
    })

    test('Layout is unchanged', () =>
    {
      //This may not be the best example depending on how we handle the live data propogation
      //(e.g. login name may change - but demonstrates usage until then)
      navBase.Snap()
    })

  })

  describe('Side Bar Navigation', () => {
    beforeEach(() => navBase = new SideBar(unitValidator));

    test('Correct Elements Exist', () =>{
      navBase.Validate().hasCorrectElements('sideBar')//validate is just a method - can accept args
      navBase.Validate().hasCorrectProps('sideBar')
    })
    test('Icons Based on User Type ', () =>{
      navBase = new SideBarPII(unitValidator)//overwrite properties to change user_type
      navBase.Validate().hasCorrectElements('sideBarPII')
    })
  })

  describe('Footer Navigation', () => {
    beforeEach(() => navBase = new FooterNav(unitValidator));

    test('Correct Elements Exist', () =>{
      navBase.Validate().hasCorrectElements('footer')
    })
    test('Reload Database Should Not Be Visible Outside of Dev',()=>{
      navBase = new FooterNavNoReload(unitValidator)//overwrite properties to change user_type
      navBase.Validate().hasCorrectElements('footerNoReload')
    })
  })
});
