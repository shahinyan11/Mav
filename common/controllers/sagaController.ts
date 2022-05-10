import password from '@/sagas/password'
import toast from '@/sagas/toast'
import session from '@/sagas/session'
import { all } from 'redux-saga/effects'

export function* rootSaga() {
  yield all([
    ...password,
    ...toast,
    ...session,
  ])
}
