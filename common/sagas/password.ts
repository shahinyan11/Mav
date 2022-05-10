import API from '@/api'
import Password from '@/models/Password'
import { PasswordActionType, PasswordResetAction } from '@/store/password/types'
import { call, put, takeLatest } from 'redux-saga/effects'
import { SET_TOAST_MASSAGE } from '@/ActionsTypes'

function* initiatePasswordReset(action: PasswordResetAction) {
  const { email } = action.payload
  yield put({ type: SET_TOAST_MASSAGE, payload: { visible: true, type: 'success', text: 'Email sent' } })
  const [ok, password]: [boolean, Password] = yield call(new API().password.reset, email)
}

function* PasswordResetSuccess() {
  yield put({ type: SET_TOAST_MASSAGE, payload: { visible: true, type: 'success', text: 'Your password has been reset' } })
}

export default [
  takeLatest(PasswordActionType.Reset, initiatePasswordReset),
  takeLatest(PasswordActionType.ResetSuccess, PasswordResetSuccess),
]
