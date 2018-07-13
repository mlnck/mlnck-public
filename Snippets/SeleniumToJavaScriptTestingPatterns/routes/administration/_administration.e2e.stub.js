import BehaviourExecutor from '../../_patterns/behaviour/BehaviourExecutor';
//Behaviours

import PageBase from './page/base'

describe('Administration Route e2e Tests', () => {
  let behaviourExecutor,
      PageBase;

  beforeEach(() => {
    behaviourExecutor = new BehaviourExecutor()
    pageBase = new PageBase()
  })

  test('Circulation Logo Loader Displays on Tab Load', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Selecting Tabs Load Correct Content', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  test('Download Button Exports CSV', () => {
    const pageObj = { pageBase };

    behaviourExecutor.Execute([
    ]);

  });

  describe('After Edit Button Clicked', () => {

    describe('Focused on Users Tab', () => {

      describe('On Add New Button Click', () => {

        test('Should Display Empty Modal', () => {
          const pageObj = { pageBase };

          behaviourExecutor.Execute([
          ]);

        });

        test('Modal Should Be Able to Be Canceled', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

        test('Should Be Able to Be Saved When All Fields Correctly Filled Out', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

      })//end add new user

      test('Should Display Pre-filled Modal on User Select ', () => {
        const pageObj = { pageBase };

        behaviourExecutor.Execute([
        ]);

      });

      test('Modal Should Be Able to Be Canceled', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Modal Should Be Able to Be Saved', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Changes Should Persist On Lock Button Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

    }); //end Users Tab

    describe('Focused on Billing Codes Tab', () => {

      describe('On Add New Button Click', () => {

        test('Should Display Empty Modal', () => {
          const pageObj = { pageBase };

          behaviourExecutor.Execute([
          ]);

        });

        test('Modal Should Be Able to Be Canceled', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

        test('Should Be Able to Be Saved When All Fields Correctly Filled Out', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

      })//end add new billing code

      test('Should Allow Description Input Fileds to Be Updated', () => {
        const pageObj = { pageBase };

        behaviourExecutor.Execute([
        ]);

      });

      describe('On Separate Invoice Toggle', () => {

        test('Should Display Empty Modal', () => {
          const pageObj = { pageBase };

          behaviourExecutor.Execute([
          ]);

        });

        test('Should Be Able to Be Canceled', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

        test('Should Be Able to Be Saved When All Fields Correctly Filled Out', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

      })

      test('Changes Should Persist On Lock Button Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

    }); //end Billing Codes Tab

    describe('Focused on Locations Tab', () => {

      describe('On Add New Button Click', () => {

        test('Should Display Empty Modal', () => {
          const pageObj = { pageBase };

          behaviourExecutor.Execute([
          ]);

        });

        test('Modal Should Be Able to Be Canceled', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

        test('Should Be Able to Be Saved When All Fields Correctly Filled Out', () => {
          const pageObj = { pageBase };
            //test for modal closure as well
          behaviourExecutor.Execute([
          ]);

        });

      })//end add new location

      test('Should Allow Description Input Fileds to Be Updated', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Be able to Search for Users When "Rider Locations" Clicked', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Changes Should Persist On Lock Button Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

    });//end Locations Tab

    describe('Focused on Riders Tab', () => {

      test('Should Redirect to add-a-rider page On Add New Clicked', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Be able to Search for Users When "Rider Locations" Clicked', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Fail to Allow In-Transit Users to Be Edited', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Allow Non In-Transit Users to Be Deleted on Trash Icon Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Allow Non In-Transit Users to Be Set to Inactive', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Should Redirect to rider page On User Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

      test('Changes Should Persist On Lock Button Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

    });//end Riders Tab

    describe('Focused on Riders Tab', () => {

      test('Changes Should Persist On Lock Button Click', () => {
        const pageObj = { pageBase };
          //test for modal closure as well
        behaviourExecutor.Execute([
        ]);

      });

    });//end Organization Tab

  });

});
