import { SET_CURRENT_USER } from '@/ActionsTypes'
import { ReducersType } from '@/redux'

const INITIAL_STATE = {
  currentUser: {},
}

export default (state = INITIAL_STATE, action:ReducersType)=>{
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default: return state
  }
}
