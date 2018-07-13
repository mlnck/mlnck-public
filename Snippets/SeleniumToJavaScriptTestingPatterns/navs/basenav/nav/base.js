import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../../../client/store/configureStore.dev'

import propsSingleton from '../../../_patterns/singleton/singletonBase.pattern'

import pageElemMap from './elementmap'
import PageObjectBasePage from '../../../_patterns/page-object/poBasePage.pattern'
import {sinonNavActions, sinonNavProps} from './sinonBase'

import Footer from '../../../../client/components/common/Footer'
import Header from '../../../../client/components/common/Header'
import RiderSearch from '../../../../client/components/rider-search/RiderSearch'
import VerticalNav from '../../../../client/components/common/VerticalNav'

import AlertCards from '../../../../client/components/alerts/AlertCards'


import { topNavProps,sidebarProps,footerProps,alertCardsProps } from '../../../_mocks/navs/basenav'

export class TopNav extends PageObjectBasePage
{
  constructor(validatorType,renderMethod='mount')
  {
    super({
      component:<Header {...topNavProps} changeRoute={(param)=>{console.log('changing route',param);}} />,
      pageElemMap,
      pageValidator:validatorType,
    },renderMethod);
  }
}

export class SideBar extends PageObjectBasePage
{
  constructor(validatorType)
  {
    super({
      component:<VerticalNav {...sidebarProps}/>,
      pageElemMap,
      pageValidator:validatorType
    },'render');
  }
}
export class SideBarPII extends PageObjectBasePage
{
  constructor(validatorType)
  {
    super({
      component:<VerticalNav {...sidebarProps} user={{...sidebarProps.user,user_type:'PII'}} />,
      pageElemMap,
      pageValidator:validatorType
    },'render');
  }
}

export class FooterNav extends PageObjectBasePage
{
  constructor(validatorType)
  {
    super({
      component:<Footer {...footerProps} />,
      pageElemMap,
      pageValidator:validatorType
    },'render');
  }
}

export class FooterNavNoReload extends PageObjectBasePage
{
  constructor(validatorType)
  {
    super({
      component:<Footer {...footerProps} user={{...footerProps.user,email:'no_reload'}} />,
      pageElemMap,
      pageValidator:validatorType
    },'render');
  }
}

export class Alerts extends PageObjectBasePage
{
  constructor(validatorType,renderMethod='mount')
  {
    const alertsProps = propsSingleton.get('fullPageData')

    alertsProps.actions = { ...sinonNavActions } // <-- to add to nested props

    super({
      component:<AlertCards {...alertsProps} {...sinonNavProps} />,
      pageElemMap,
      pageValidator:validatorType
    },renderMethod);
  }
}
