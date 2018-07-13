/***
 * PageObject Pattern: Validator
 ***/
import React from 'react';

import Enzyme,{shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default class poBaseValidator extends React.Component
{
  constructor(component)
  {
    super(component);
    this.Map = component;
  }

  elementHasClass(elem,theClass,bool)
  { expect((elem).hasClass(theClass)).toEqual(bool) }

  elementExists(elem,bool)
  { expect(elem.exists()).toEqual(bool) }

  elementHasHTML(elem,str,bool)
  {
    bool
      ? expect(elem.html()).toEqual(str)
      : expect(elem.html()).not.toEqual(str)
  }

  elementHasString(s,str,bool)
  {
    bool
      ? expect(s).toEqual(str)
      : expect(s).not.toEqual(str)
  }
}
