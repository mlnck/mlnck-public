import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
//Behaviours
import FocusForm from './behaviours/action.enableForm.behaviour'
import FormExists from './behaviours/assert.enableForm.behaviour'

import AwaitBehaviourFormPopulateAndSubmit from './behaviours/await.formPopulateSubmit.behaviour';

import LoginBase from './page/base'

describe('Login Route E2E Tests', () => {
  let behaviourExecutor,
      loginBase;

  beforeEach(() => {
    behaviourExecutor = new BehaviourExecutor()
    loginBase = new LoginBase()
    console.log('loginBase:',loginBase);
  })

  test('Should Reject Invalid Login', () => {
    const invalidObj = { loginBase, username:'md5h@a.sh',pass:'sha256' };

    behaviourExecutor.Execute([
      new FocusForm(loginBase),
      new FormExists(loginBase),
      new AwaitBehaviourFormPopulateAndSubmit(invalidObj)
      // new ChangeInput(loginBase,invalidObj),
      // new SubmitForm(loginBase)
    ]);

  });

  test('Should Accept and Forward Valid Login', () => {
    const loginObj = { loginBase };

    behaviourExecutor.Execute([
    ]);

    test('Should Log User Out on Load', () => {
      const loginObj = { loginBase };

      behaviourExecutor.Execute([
      ]);

    });

  });

});
