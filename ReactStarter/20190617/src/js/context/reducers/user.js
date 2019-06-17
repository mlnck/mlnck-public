import type { Action, ContextWritersBlockType } from '../../../flow/context/ReducersType'

import * as UserConst from '../constants/User'
import { writersblockContextInitial } from '../initializers'

export const UserReducer = (
  state: ContextWritersBlockType = writersblockContextInitial,
  action: Action
) =>
{
  const usr = { ...state.User }
  switch (action.type)
  {
    case UserConst.USER_LOGIN:
      return {
        ...usr,
        emailVerified:true
      }
    case UserConst.USER_LOGOUT:
      return usr
    default:
      return usr
  }
}