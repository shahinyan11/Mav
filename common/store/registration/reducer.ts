import { AnyAction } from 'redux'
import { RegistrationActionType, RegistrationState } from './types'

const initialState: RegistrationState = {
  errors: undefined,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case RegistrationActionType.ValidationErrors:
      return { ...state, errors: action.payload }
    default:
      return state
  }
}
