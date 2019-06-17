import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '../context/constants/routes'
import App from './App'

import LandingPage from '../containers/Landing'
import AboutPage from '../containers/About'

const Routes = () => (
  <App>
    <BrowserRouter>
      <Switch>
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.LANDING} component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </App>
)

Routes.displayName = 'Routes'
export default Routes