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

  test('', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

});
