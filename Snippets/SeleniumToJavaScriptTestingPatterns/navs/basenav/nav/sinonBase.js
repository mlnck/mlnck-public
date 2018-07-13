import SinonSingleton from '../../../_patterns/singleton/singletonBase.pattern'
import { sinonUtils } from '../../../_utils/sinon.utils'
import { alertResponseObjMock } from '../../../_mocks/navs/sinonmocks'

  //The object below should contain all props that will be spied/stubbed/mocked for a specific component
const SinonBaseListeners = {
  toggleAlertsCards: sinonUtils.spy.set,
  updateRoute: sinonUtils.spy.set,
  getAlerts:  sinonUtils.stub.set
}

//instantiate listeners
const toggleAlertsCardsSpy = SinonBaseListeners.toggleAlertsCards()
const updateRouteSpy = SinonBaseListeners.updateRoute()
const getAlertsStub = SinonBaseListeners.getAlerts()

//set stub/mock data
getAlertsStub.onCall(0).callsArgWith(1,alertResponseObjMock.alertFailedType)
             .onCall(2).callsArgWith(1,alertResponseObjMock.alertWarningLevelOne);

//add to singleton
sinonUtils.save(toggleAlertsCardsSpy,'alertsSinon')
sinonUtils.save(updateRouteSpy,'alertsUpdateRouteSinon')
sinonUtils.save(getAlertsStub,'getAlertsSinon')

//organize by common action methods
const navActionSpiesObj = {
  updateRoute:updateRouteSpy
}
const navActionStubsObj = {
  getAlerts:getAlertsStub
}
const navActionMocksObj = { }


//ogranize by methods called from props
const navPropSpiesObj = {
  toggleAlertsCards:toggleAlertsCardsSpy
}
const navPropStubsObj = { }
const navPropMocksObj = { }


export const sinonNavActions = Object.assign({}, navActionSpiesObj, navActionStubsObj, navActionMocksObj);
export const sinonNavProps = Object.assign({}, navPropSpiesObj, navPropStubsObj, navPropMocksObj);
