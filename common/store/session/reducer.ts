import { AnyAction } from 'redux'
import { SessionActionType } from './types'

export default (state = {
  errors: undefined,
  user: undefined,
}, action: AnyAction) => {
  switch (action.type) {
    case SessionActionType.CreateSuccess:
      return { ...state, user: action.payload }
    case SessionActionType.ValidationErrors:
      return { ...state, errors: action.payload }
    default:
      return state
  }
}
