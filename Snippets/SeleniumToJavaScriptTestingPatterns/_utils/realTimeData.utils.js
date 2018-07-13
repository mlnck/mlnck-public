/*
  Stub file for implementing realtime data from the application.

  This format would give us two advantages in Testing
    1) we would be using real data sent from the backend, so any changes to the
       backend would be instantly reflected in the frontend, causing an immediate failure
    2) by requesting the full dataset only in the beforeAll method and then using it statically we remove
      that very small chance of starting a test suite, someone updating the database before the suite
      has ended, and throwing a false failure
*/

import React from 'react'
import Enzyme,{mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DataSingleton from '../_patterns/singleton/singletonBase.pattern'

import configureStore from '../../client/store/configureStore'
import AuthContainer from '../../client/containers/AuthContainer'
import AuthForm from '../../client/components/user-auth/AuthForm'
import Root from '../../client/containers/Root.js'

function baseComponent()
{
  const store = configureStore(),
        authConst = mount(<AuthContainer store={store} />),
        authForm = authConst.find(AuthForm).get(0);
  return { authConst, authForm, store }
}

export const setUserCredentials = (credentials=null) =>
{
  return new Promise((resolve,reject) =>
  {
    const defaultUser =
          {
            email: 'user@cityhospital.com',
            password: 'password123'
          },
          userData = credentials || defaultUser;

    if(!credentials){
      console.log(`You are logging in as the default user. To login as another user call AuthLogin with different credentials:
        e.g.: setUserCredentials({ email: 'user2@address.com', password: 'password123' })`);
    }

    const { authConst, authForm, store } = baseComponent();
    let dispatchResultNum = 0,
        userToken;

    const loginCB = (obj) =>
    {
      if(!obj.token){ reject(`ERROR: INVALID USER CREDENTIALS: ${obj.detail}`); }
      userToken = obj.token
      authForm.props.actions.fetchUserProfile(obj.token) }

    store.subscribe(() => {
      if(++dispatchResultNum >= 7)
      {
        return makeAsyncRequest('getCohorts',{},true)
          .then((obj) => {
            let userData = store.getState()
                userData.app.cohorts = obj.app.cohorts
            DataSingleton.add(userData,'userData')
            DataSingleton.add({userToken},'userToken')
            resolve()
          })
      }
    })

    authForm.props.actions.loginUser(userData,loginCB,loginCB)
  })
}

export const setPageProperties = (page) =>
{
  DataSingleton.remove('pageData');
  return new Promise((resolve,reject) =>
  {
    /*
      Fetch individual endpoints (that mirror what each route requests)
      Set them within the singleton to become our "mock" data for the rest of the tests
    */
    const { authConst, authForm, store } = baseComponent();
      //We will not need to include any of the following calls within endpointArr as they are being set on user login
    /*
      checkUserActivity
      checkAppStatus
      FETCH_USER_PROFILE
      fetchSpecialAccommodations
      fetchRideTypes
      getServiceLevels
      fetchCarriers
    */
    let endpointArr = [],//setting here in case there are any endpoints that are loaded across all pages
        customUpdates = [],//to be used for any required state manipulations that are not carried out by the queries
        returnedState;//the final object (after all queries and additional mutations) to be returned
    switch (page)
    {
      // case 'exampleUsage':
      //   endpointArr.push(['endpoint1',['param1','param2']])
      //   break;
      case 'nav':
      case 'home':
          endpointArr.push(
                            ['updateRoute'],
                            ['getAlerts'],///SET_ALERT_COUNT
                            ['setFileDownloadCount',[{count_only: true}]]
                          )
          customUpdates.push(
                              //total_alerts is not set by a method in the body which we cannot access
                              function(state){ state.app.total_alerts = state.app.alertCount },
                              function(state){ state.app.params = {} }
                            )
        break;
      case 'index-loggedIn':
        //
      break;
      case 'invoice':
        //
      break;
      case 'login':
      //
      break;
    }

    let curEndpointData = {}, i=0;

      store.subscribe(() => {
          //check if more
        if(++i < endpointArr.length)
        { queryEndpoint() }
        else
        {
          let returnedState = store.getState()
          customUpdates.forEach(itm => itm(returnedState) )
          DataSingleton.add(returnedState,'pageData')
          resolve()
        }
      })

      authForm.props.actions.sessionToken = DataSingleton.get('userToken')

      function queryEndpoint()
      {
        (endpointArr[i][1])
          ? authForm.props.actions[endpointArr[i][0]](...endpointArr[i][1])
          : authForm.props.actions[endpointArr[i][0]]()
      }
      //kickoff the first
      queryEndpoint()
  })
}


export const makeAsyncRequest = (action,params,subscribeStore=false) =>
{
  const { authConst, authForm, store } = baseComponent();

  return new Promise((resolve,reject) =>
  {
    if(subscribeStore)
    {
      store.subscribe(() => {
        resolve(store.getState());
      })
    }
    authForm.props.actions[action](params)
  })
}


export const mergeState = (a,b) =>
{
  let mergedState = a;
  for(let k in b)
  {
    let curType = typeof(b[k])
    switch(typeof(mergedState[k]))
    {
      case 'string':
      case 'boolean':
      case 'number':
        // value exists, do not replace
        break;
      case 'object':
        if( // only replace if value is empty
            (Array.isArray(mergedState[k]) && !mergedState[k].length)
             || mergedState[k] === {}
          ){ mergedState[k] = b[k] }
        break;
      default: // undefined value, add new key & value
        mergedState[k] = b[k]
    }
  }
  return mergedState
}
