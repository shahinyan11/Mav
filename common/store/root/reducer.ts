import { combineReducers } from 'redux'
import registration from '@/store/registration/reducer'
import coursesController from '../reducers/coursesController'
import mainReducer from '../reducers/mainReducer'
import ToastMessage from '../reducers/ToastMessage'
import session from '@/store/session/reducer'
import contact from '@/store/contact/reducer'
import storyfile from '@/store/storyfile/reducer'

export default combineReducers({
  mainReducer,
  coursesController,
  ToastMessage,
  registration: registration,
  session: session,
  contact: contact,
  storyfile: storyfile,
})
