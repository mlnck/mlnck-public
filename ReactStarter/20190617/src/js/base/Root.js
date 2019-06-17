import type { ContextWritersBlockType } from '../../flow/context/ReducersType'

import React, { useReducer } from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { writersblockContextInitial } from '../context/initializers'
import Routes from './Routes'
import writersBlockRootReducer from '../context/reducers'

const debug = false 
    //only works with webpack but keep for future integration
// const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine()
const engine = new Styletron()

//  https://stackoverflow.com/questions/55205472
//    /is-nesting-react-context-provider-and-consuming-those-with-usecontext-a-problem
const initialContext: ContextWritersBlockType  = writersblockContextInitial
export const WritersBlockDispatch: $FlowES6Bug = React.createContext(initialContext);

const Root = () => 
{
  const [writersBlockStore, dispatch] = useReducer(writersBlockRootReducer, initialContext)

  return (
    <WritersBlockDispatch.Provider value={{ writersBlockStore, dispatch }}>
      <StyletronProvider value={engine} debug={debug}>
        <Routes />
      </StyletronProvider>
    </WritersBlockDispatch.Provider>
  )
}
  Root.displayName = 'Root'

export default Root