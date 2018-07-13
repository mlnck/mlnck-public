import React from 'react'
import PageObjectBasePage from '../../../_patterns/page-object/poBasePage.pattern'

import pageElemMap from './elementmap'
import RiderSearchComponent from '../../../../client/components/rider-search/RiderSearch'


import { riderSearchProps } from '../../../_mocks/common/RiderSearch'

export class RiderSearch extends PageObjectBasePage
{
  constructor(validatorType,renderMethod='mount')
  {
    super({
      component:<RiderSearchComponent {...riderSearchProps} />,
      pageElemMap,
      pageValidator:validatorType,
    },renderMethod);
  }
}
