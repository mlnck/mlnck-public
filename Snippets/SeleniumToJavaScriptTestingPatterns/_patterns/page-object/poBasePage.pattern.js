/***
 * PageObject Pattern: Base Page
 ***/
import React from 'react'
import Enzyme,{shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {snapshot} from '../../_utils/jest.utils'

Enzyme.configure({ adapter: new Adapter() });

export default class poBasePage extends React.Component
{
  constructor({component,pageElemMap,pageValidator,state},renderMethod)
  {
    super({component,pageElemMap,pageValidator,state});
    this.rendered = (renderMethod === 'render') ? render( component ) :
      (renderMethod === 'shallow') ? shallow( component ) : mount( component );
    this.Map = new pageElemMap(this.rendered);
    if(state){ this.rendered.setState(state) }
    this.curValidate = 0;
    this.isValidate = pageValidator;
    this.ssComp = component;
  }
  Validate(s=null){ if(s){ console.log(++this.curValidate, ') VALIDATING:',s)} return new this.isValidate(this.rendered); }
  Snap(){ snapshot(this.ssComp) }
}
