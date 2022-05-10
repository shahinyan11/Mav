import { put, delay, select, takeLatest } from 'redux-saga/effects'
import { HIDE_TOAST, HIDE_TOAST_DELAY, SET_TOAST_MASSAGE } from '@/ActionsTypes'

function* hideToastDelay() {
  const { type } = yield select((state) => state.ToastMessage)
  yield delay(1500)
  yield put({ type: SET_TOAST_MASSAGE, payload: { visible: false, type, text: '' } })
}

function* hideToast() {
  const { type } = yield select((state) => state.ToastMessage)
  yield put({ type: SET_TOAST_MASSAGE, payload: { visible: false, type, text: '' } })
}

export default [
  takeLatest(HIDE_TOAST, hideToast),
  takeLatest(HIDE_TOAST_DELAY, hideToastDelay),
]
