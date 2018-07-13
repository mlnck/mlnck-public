import PageObjectBaseMap from '../../../_patterns/page-object/poBaseElementMap.pattern'

export default class ElementMap extends PageObjectBaseMap
{
  //Getters
  get current()
  { return this.props }

  get input()
  { return this.props.find('input#rider-search-home').first(); }
}
