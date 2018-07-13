import PageObjectValidator from '../../../_patterns/page-object/poBaseValidator.pattern.js';
import SinonObj from '../../../_patterns/singleton/singletonBase.pattern'

import navPageElemMap from './elementmap';

export default class NavValidatorE2E extends PageObjectValidator
{

  constructor(mountedObj)
  {
    super(new navPageElemMap(mountedObj))
  };

  dispatchActionOnClick(action)
  {
    for(let i=0; i<action.correctActionReturns.length; i++ )
    {
      expect(action.correctActionReturns[i]).toEqual(SinonObj.get(i).currentSpyValue[0])
    }
  }

}
