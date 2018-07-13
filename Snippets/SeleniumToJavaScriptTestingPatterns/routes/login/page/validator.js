import PageObjectValidator from '../../../_patterns/page-object/poBaseValidator.pattern.js';

import routeElementMap from './elementmap';

export default class RouteValidator extends PageObjectValidator
{
  constructor(mountedObj)
  { super(new routeElementMap(mountedObj)) };

  //common
  hasInputField() //form has rendered to the page
  {
    expect(this.Map.inputUser).toBeDefined();
    expect(this.Map.inputPassword).toBeDefined();
    expect(this.Map.loginSubmitButton).toBeDefined();
  }

  // //e2e
  wasChanged(o)
  {
    let usrInput = this.Map.inputUser.props(),
        pwdInput = this.Map.inputPassword.props();
    expect(usrInput.defaultValue).toEqual(o.username)
    expect(pwdInput.defaultValue).toEqual(o.pass)
  }
  // dropDownClosed()
  // { console.log('this.Map.fuzzyResults CLOSED:',this.Map.fuzzyResults.props()); }
  // dropDownOpen()
  // { console.log('this.Map.fuzzyResults OPEN:',this.Map.fuzzyResults.props()); }
  //
  // //unit
  // hasCorrectProps()
  // {
  //   let prps = this.Map.inpt.props();
  //   expect(prps.name).toEqual('riderSearch');
  //   expect(prps.type).toEqual('text');
  //   expect(prps.label).toEqual('Search by Rider Name, DOB, Rider or Ride ID#, Phone or Address');
  // }
}
