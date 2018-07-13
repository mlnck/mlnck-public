import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
//Behaviours

import PageBase from './page/base'

describe('Add A Rider Route e2e Tests', () => {
  let behaviourExecutor,
      PageBase;

  beforeEach(() => {
    behaviourExecutor = new BehaviourExecutor()
    pageBase = new PageBase()
  })

  test('Should Auto Fill name if coming from search field', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Auto Fill Dropdown Locations in Address field', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Auto Fill Dropdown Locations in Address field', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Allow Continue Button to be Clicked when Required Section Criteria is Complete', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Enable Next Section when Continue Button is Clicked', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Enable Next Section when Continue Button is Clicked', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Allow You to Add Optional Care Contact', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
      //handle confirmation toggle in here as well
    ]);

  });

  test('Should Allow You to Add Rider Note(s)', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Should Allow You to Upload File of Correct Type', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

});
