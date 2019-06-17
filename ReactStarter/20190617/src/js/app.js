import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import Root from './base/Root'

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer

const rootElem = document.getElementById('root')
if (rootElem)
{
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootElem
  )
}

if((module: any).hot && rootElem)
{
  (module: any).hot.accept('./base/Root', () =>
  {
    // eslint-disable-next-line global-require
    const NextRoot = require('./base/Root').default
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootElem
    )
  })
}
