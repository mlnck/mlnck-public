import PageObjectValidator from '../../../_patterns/page-object/poBaseValidator.pattern.js';

import navPageElemMap from './elementmap';

export default class NavValidatorUnit extends PageObjectValidator
{
  constructor(mountedObj)
  { super(new navPageElemMap(mountedObj)) };

  hasLogo()
  { expect(this.Map.logo).toBeDefined(); }
  hasInputField()
  { expect(this.Map.input).toBeDefined(); }
  hasNotificationIcon()
  { expect(this.Map.notifications).toBeDefined(); }
  hasUserSection()
  { expect(this.Map.userSection).toBeDefined(); }

  hasMobileCloseMenu()
  { expect(this.Map.mobileCloseMenu).toBeDefined(); }
  hasMobileUserLogo()
  { expect(this.Map.mobileUserLogo).toBeDefined(); }
  hasMobileLogOut()
  { expect(this.Map.mobileLogOut).toBeDefined(); }
  hasMobileFooterLinks()
  { expect(this.Map.mobileFooterLinks).toBeDefined(); }
  hasMobileCopyRight()
  { expect(this.Map.mobileCopyRight).toBeDefined(); }

  hasAllRides()
  { expect(this.Map.allRides).toBeDefined(); }
  hasAnalytics()
  { expect(this.Map.analytics).toBeDefined(); }
  hasSettings()
  { expect(this.Map.settings).toBeDefined(); }
  hasInvoice()
  { expect(this.Map.invoice).toBeDefined(); }

  hasFooterCopyRight()
  { expect(this.Map.footerCopyRight).toBeDefined(); }
  hasFooterFooterLinks()
  { expect(this.Map.footerFooterLinks).toBeDefined(); }


  hasCorrectElements(curNav)
  {
    if(curNav === 'topNav')
    {
      this.hasLogo();
      this.hasInputField();
      this.hasNotificationIcon();
      this.hasUserSection();
    }
    if(curNav === 'sideBar')
    {
      this.hasMobileUserLogo();
      this.hasMobileLogOut();
      this.hasMobileFooterLinks();
      this.hasMobileCopyRight();
      this.hasAllRides();
      this.hasAnalytics();
      this.hasSettings();
      this.hasInvoice();

      this.showsCalendarLink(false);
    }
    if(curNav === 'sideBarPII')
    { this.showsCalendarLink(false); }
    if(curNav === 'footer')
    {
      this.hasFooterCopyRight();
      this.hasFooterFooterLinks();

      this.showsReloadDatabase(true);
    }
    if(curNav === 'footerNoReload')
    { this.showsReloadDatabase(false); }
  }
  showsCalendarLink(b)
  {
    (b)
      ? expect(~this.Map.iconsWrapper.html().indexOf('icon-calendar')).not.toEqual(0)
      : expect(~this.Map.iconsWrapper.html().indexOf('icon-calendar')).toEqual(0)
  }
  showsReloadDatabase(b)
  {
    (b)
      ? expect(~this.Map.footerFooterLinks.html().indexOf('Reload')).not.toEqual(0)
      : expect(~this.Map.footerFooterLinks.html().indexOf('Reload')).toEqual(0)
  }
  hasCorrectProps(curNav)
  {
    if(curNav === 'topNav')
    {
      let prps = this.Map.input.get(0);
      expect(prps.name).toEqual('input');
      expect(prps.attribs.name).toEqual('riderSearch');
      expect(prps.attribs.type).toEqual('text');
      expect(prps.attribs.label).toEqual('Search by Rider Name, DOB, Rider or Ride ID#, Phone or Address');
    }
    if(curNav === 'sideBar')
    {
      const userName = this.Map.mobileUserInfo.find('p').get(0);
      expect(userName.children[0].data).toEqual('Mary Irving');
    }
  }
  alertVisible(b)
  {
    (b)
      ? expect(this.Map.alertsAmt.text()).not.toEqual('')
      : expect(this.Map.alertsAmt.text()).toEqual('')
  }
  accountHasUserInfo()
  {
    console.log('Example using find instead of extending the Map Class');
    expect(this.Map.userSection.find('.user-icon').text()).toEqual('M')
    expect(this.Map.userSection.find('.user-name').text().replace(/\W/,'')).toEqual('MaryIrving')
  }

}
