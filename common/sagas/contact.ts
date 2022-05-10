import { select, takeLatest } from 'redux-saga/effects'
import { ContactActionType } from '@/store/contact/types'

function* sendContactUs() {
  try {
    const {
      selectedTopic,
      message,
    } = yield select((state) => state.contact)

    console.log(selectedTopic, message)
  }
  catch (err) {
    console.log('Err: ', err)
  }
}

export default [
  takeLatest(ContactActionType.Send, sendContactUs),
]
