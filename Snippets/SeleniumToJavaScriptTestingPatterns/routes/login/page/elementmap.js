import PageObjectBaseMap from '../../../_patterns/page-object/poBaseElementMap.pattern'

export default class RouteElementMap extends PageObjectBaseMap
{
  //Getters
  get inputUser(){
    return this.props.find('input#login-user').first();
  }
  get inputPassword(){
    return this.props.find('input[name="password"]').first();
  }
  get loginSubmitButton(){
    return this.props.find('input#login-submit').first();
  }
}
