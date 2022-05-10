import { AnyAction } from 'redux'
import { ContactActionType, ContactUsState } from './types'

const initialState: ContactUsState = {
  topics: ['AI', 'Content', 'Courses', 'Membership', 'Payment', 'Profile', 'Service', 'Subscription'],
  selectedTopic: '',
  message: '',
}

export default (state = initialState, action: AnyAction): ContactUsState => {
  switch (action.type) {
    case ContactActionType.SetActiveTopic:
      return { ...state, selectedTopic: action.payload }
    case ContactActionType.SetMessage:
      return { ...state, message: action.payload }
    default:
      return state
  }
}
