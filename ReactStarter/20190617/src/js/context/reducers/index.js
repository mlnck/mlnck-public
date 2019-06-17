import type { Action, ContextWritersBlockType } from '../../../flow/context/ReducersType'

import * as LandingConst from '../constants/landing'
import { writersblockContextInitial } from '../initializers'

import { LandingReducer } from './landing'
import { UserReducer } from './user'

export default function writersBlockRootReducer(
  state: ContextWritersBlockType = writersblockContextInitial,
  action: Action
)
{
  return {
    Landing: LandingReducer(state, action),
    User: UserReducer(state, action)
  }
}