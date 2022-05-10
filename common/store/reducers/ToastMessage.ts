import { SET_TOAST_MASSAGE } from '@/ActionsTypes'

export interface toastMessageType {
  type: string,
  text: string,
  visible: boolean
}

const INITIAL_STATE = {
  type: '',
  text: '',
  visible: false,
}

export default (state = INITIAL_STATE, action: toastMessageType) => {
  switch (action.type) {
    case SET_TOAST_MASSAGE:
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
        visible: action.payload.visible,
      }
    default: return state
  }
}
