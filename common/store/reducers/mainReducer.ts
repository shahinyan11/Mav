import { CHANGE_THEME } from '@/ActionsTypes'
import { ReducersType } from '@/redux'

export interface State {
  theme: 'light' | 'dark'
}

const initialState: State = {
  theme: 'light',
}

export default (state = initialState, action: ReducersType)=> {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        refreshing: true,
      }
    }
    default: {
      return state
    }
  }
}
