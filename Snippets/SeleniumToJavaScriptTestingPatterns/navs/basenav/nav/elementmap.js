import PageObjectBaseMap from '../../../_patterns/page-object/poBaseElementMap.pattern'

import AlertCards from '../../../../client/components/alerts/AlertCards'

export default class PageElementMap extends PageObjectBaseMap
{
  //Getters
  get current()
  { return this.props }

    //Header
  get header()
  { return this.props.find('header') }
  get alerts()
  { return this.props.find('header .alerts-block') }
  get alertCard()
  { return this.props.find('header #alertCards') }
  get alertCardComponent()
  { return this.props.find(AlertCards) }
  get alertsAmt()
  { return this.props.find('header .alerts-block .alerts-num') }
  get logo()
  { return this.props.find('header a.logo img').first(); }
  get input()
  { return this.props.find('header form.header-search input#rider-search-home').first(); }
  get inputFromSearchComponent()
  { return this.props.find('input#rider-search-home').first(); }
  get notifications()
  { return this.props.find('header .alerts-block').first(); }
  get notificationAmt()
  { return this.props.find('header .alerts-block .alerts-num').first(); }
  get userSection()
  { return this.props.find('header .user-block').first(); }
  get userLogout()
  { return this.props.find('header .user-block ~ .dropdown-menu .menu-item').first(); }

    //Sidebar
  get mobileCloseMenu()
  { return this.props.find('.vertical-nav .close-menu .fa-times').first(); }
  get mobileUserInfo()
  { return this.props.find('.vertical-nav .user-info').first(); }
  get mobileUserLogo()
  { return this.props.find('.vertical-nav .user-info .user-logo').first(); }
  get mobileLogOut()
  { return this.props.find('.vertical-nav svg#icon-power-logout').first(); }
  get mobileFooterLinks()
  { return this.props.find('.vertical-nav footer#footer .link-wrapper').first(); }
  get mobileCopyRight()
  { return this.props.find('.vertical-nav footer#footer .cr p').first(); }

  get allRides()
  { return this.props.find('.vertical-nav svg#icon-calendar').first(); }
  get analytics()
  { return this.props.find('.vertical-nav svg#icon-chart-areaspline').first(); }
  get settings()
  { return this.props.find('.vertical-nav svg#icon-settings').first(); }
  get invoice()
  { return this.props.find('.vertical-nav svg#icon-currency-usd').first(); }
  get iconsWrapper()
  { return this.props.find('.vertical-nav .icons-wrapper').first();}

    //Footer
  get footerCopyRight()
  { return this.props.find('.app-container footer#footer .cr p').first(); }
  get footerFooterLinks()
  { return this.props.find('footer#footer .link-wrapper').first(); }

  get logoLink()
  { return this.props.find('header a.logo').first(); }

  //From Alerts component
  get directAlerts()
  { return this.props.find('.alerts-block'); }
  get directAlertCard()
  { return this.props.find('#alertCards'); }
  get directAlertCardViewAll()
  { return this.props.find('.heading > a'); }
  get directAlertCardTitle()
  { return this.props.find('#alertCards h3'); }
  get directAlertCardRider()
  { return this.props.find('#alertCards p.rider-name'); }
  get directAlertNextButton()
  { return this.props.find('#alertCards .header-alert-right-arrow'); }
  get directAlertPrevButton()
  { return this.props.find('#alertCards .fa-chevron-left').parent(); }
}
