import { CREATE_COURSE } from '@/ActionsTypes'
import { ReducersType } from 'redux'

export default (state = [], action: ReducersType) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state]
    default:
      return state
  }
}
