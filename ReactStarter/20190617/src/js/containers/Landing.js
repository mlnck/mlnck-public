import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { WritersBlockDispatch } from '../base/Root'
import { APP_COOKIES_ACCEPTED } from '../context/constants/landing'
import { USER_LOGIN } from '../context/constants/user'

const Landing = () =>
{
  const { writersBlockStore, dispatch } = useContext(WritersBlockDispatch)
  
  const updateStore = () =>
  { dispatch({ type: APP_COOKIES_ACCEPTED, payload: 'accepting cookies' }) }
  const updateLogin = () =>
  { dispatch({ type: USER_LOGIN, payload: 'User login' }) }

  return (
    <div>
      <button type="button" onClick={updateStore}>Accept</button>
      <button type="button" onClick={updateLogin}>Login Mock</button>
      <br/>
      Have you accepted the cookies?
      {writersBlockStore && writersBlockStore.Landing.cookiesAccept ? ' Yes' : ' Not Yet'}
      <hr />
      <Link to='/about'>Go To About Page</Link>
    </div>
  )
}
Landing.displayName = 'LandingPage'

export default Landing