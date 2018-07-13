import * as rTD from '../../_utils/realTimeData.utils'

import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
import e2eValidator from './nav/validator.e2e'

//Behaviours
import ActionDispatchActionOnClick from './nav/behaviours/action.dispatchActionOnClick.behaviour'
import AssertDispatchActionOnClick from './nav/behaviours/assert.dispatchActionOnClick.behaviour'
import AwaitBehaviourCanCycleThroughAlerts from './nav/behaviours/await.canCycleThroughAlerts.behaviour'

import NavigationSingleton from '../../_patterns/singleton/singletonBase.pattern.js'
import { TopNav,SideBar,FooterNav,Alerts } from './nav/base'

beforeAll((done) => {
  rTD.setUserCredentials()
    .then(()=>{ done(); })
    .catch((err) => { console.error(err); done();} )
});

describe('Default Behaviour Landing Page View', () => {
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
        // console.log('NavigationSingleton.get("fullPageData"):',NavigationSingleton.get("fullPageData"));
        done();
      })
      .catch((err) => { console.error(err); done();} )
  })


  describe('Top Navigation elements act as desired', () => {
    beforeEach(() => navBase = new TopNav(e2eValidator,'shallow'));

    describe('All Buttons Dispatch Actions', () => {
      test('On Click Events Fired', () =>{
        behaviourExecutor.Execute([
          new ActionDispatchActionOnClick(navBase,{elem:'logoLink', spyObj:'action', spyMethod:'changeRoute'}),
          new ActionDispatchActionOnClick(navBase,{elem:'userLogout', spyObj:'action', spyMethod:'purgeState'}),
          new AssertDispatchActionOnClick(navBase,{correctActionReturns:['/','PURGE STATE SUCCESS']})
        ]);
      })
    })

    describe('Rider Search Bar', () => {
      test('Queries Rider on Input Change', () => {
        //
      })
    })

    describe('Alerts', () => {
      beforeEach(() => {navBase = new Alerts(e2eValidator)});

      test.only('Should Cycle Through Notifications', () =>{
        // console.log('NavigationSingleton.get(userData):',NavigationSingleton.get('userData'));
        behaviourExecutor.Execute([
          new AwaitBehaviourCanCycleThroughAlerts(navBase,{}),
        ]);
        expect(NavigationSingleton.get('alertsSinon').callCount).toEqual(2)
        expect(NavigationSingleton.get('alertsUpdateRouteSinon').callCount).toEqual(1)
        expect(NavigationSingleton.get('getAlertsSinon').callCount).toEqual(3)
      })

      test('Should Have Functional Elements for Each Alert Type', () =>{
        behaviourExecutor.Execute([
          new AwaitBehaviourFunctionalFailedType(navBase,{}),
          new AwaitBehaviourFunctionalWarningLevelOneType(navBase,{}),
          new AwaitBehaviourFunctionalWarningLevelTwoType(navBase,{}),
        ]);
      })

      test('Should Allow Interaction in Multi-Step Alert Cards', () =>{
        behaviourExecutor.Execute([
          new AwaitBehaviourCancelFromCard(navBase,{}),
          new AwaitBehaviourApproveFromCard(navBase,{}),
        ]);
      })

    })

    describe('User Profile', () => {
      test('Should Display Dropdown On Click', () =>{
        //
      })

      test('Should Dispatch Logout Action When Button Clicked', () =>{
        //
      })
    })
  });

  describe('Side Navigation elements act as desired', () => {
    test('Should Dispatch Action On Button Clicked', () =>{
      //
    })
  });

  describe('Footer Navigation elements act as desired', () => {
    test('Should Dispatch Action On Button Clicked', () =>{
      //
    })
  });

});
