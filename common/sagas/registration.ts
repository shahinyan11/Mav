import API from '@/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import { formatError } from '@/utils/mixins/FormatError'
import Registration from '@/models/Registration'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'
import { RegistrationActionType, RegistrationCreateAction } from '@/store/registration/types'
import { registerUserValidationErrors } from '@/store/registration/actions'
import { navigationRef } from '@/services/NavigationService'

function* registerUser(action: RegistrationCreateAction) {
  try {
    const data = action.payload
    const [ok, registration]: [boolean, Registration] = yield call(new API().registration.create, data)

    console.log(registration)

    if (!ok) {
      const errors: ValidationErrors<Registration> = registration.errors
      yield put(registerUserValidationErrors(errors))
    }
    else {
      yield call(navigationRef.navigate, 'ChoosePlan')
    }

    // if (Object.keys(resData.errors).length) {
    //   yield put({ type: SET_TOAST_MASSAGE, payload: { type: 'error', text: formatError(resData?.errors), visible: true } })
    // }
    // else {
    //   callBack(resData)
    //   yield put({ type: SET_TOAST_MASSAGE, payload: { type: 'success', text: 'Your request has been successfully done', visible: true } })
    // }
  }
  catch (err) {
    console.log('Err: ', err)
  }
}

export default [
  takeLatest(RegistrationActionType.Create, registerUser),
]
