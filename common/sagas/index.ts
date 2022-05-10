import { all } from 'redux-saga/effects'
import toast from './toast'
import password from './password'
import registration from './registration'
import sessions from './sessions'
import contact from '@/sagas/contact'
import storyfile from './storyfile'

export function* rootSaga() {
  yield all([
    ...toast,
    ...password,
    ...registration,
    ...sessions,
    ...contact,
    ...storyfile,
  ])
}
