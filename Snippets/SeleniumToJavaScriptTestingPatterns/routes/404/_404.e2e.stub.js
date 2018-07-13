import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
//Behaviours

import PageBase from './page/base'

describe('404 Route e2e Tests', () => {
  let behaviourExecutor,
      PageBase;

  beforeEach(() => {
    behaviourExecutor = new BehaviourExecutor()
    pageBase = new PageBase()
  })

  test('Should redirect on page that Does Not Exist', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should allow user to go back to the homepage', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

});
