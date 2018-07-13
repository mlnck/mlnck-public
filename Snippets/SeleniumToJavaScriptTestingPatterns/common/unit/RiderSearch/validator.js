import PageObjectValidator from '../../../_patterns/page-object/poBaseValidator.pattern.js'

import navPageElemMap from './elementmap';

export default class Validator extends PageObjectValidator
{
  constructor(mountedObj)
  { super(new navPageElemMap(mountedObj)) };

  hasInputField()
  { expect(this.Map.input).toBeDefined(); }

  hasPlaceholderText(s)
  { expect(this.Map.input.get(0).attribs.label).toEqual(s); }

}
