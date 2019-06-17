import type {
    ContextWritersBlockType,
    ContextUserType
} from '../../../flow/context/ReducersType'

import landingContextInitial from './landing'
import userContextInitial from './user'


export const writersblockContextInitial: ContextWritersBlockType = {
  Landing: landingContextInitial,
  User: userContextInitial
}
