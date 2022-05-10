import API from '@/api'
import Session from '@/models/Session'
import { navigationRef } from '@/services/NavigationService'
import { createSessionValidationErrors } from '@/store/session/actions'
import { SessionActionType, SessionCreateAction } from '@/store/session/types'
import { call, put, takeLatest } from 'redux-saga/effects'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'
import { mainRoutes } from '@/config/routes'
import Registration from '@/models/Registration'

function* createSession(action: SessionCreateAction) {
  try {
    const [success, session]: [boolean, Registration] = yield call(new API().session.create, action.payload)

    if (!success) {
      const errors: ValidationErrors<Session> = session.errors
      yield put(createSessionValidationErrors(errors))
    }
    else {
      yield put({ type: SessionActionType.CreateSuccess, payload: session.email })
      yield call(navigationRef.navigate, mainRoutes.BottomTabNavigator.id)
    }
  }
  catch (err) {
    console.log('Err: ', err)
  }
}

export default [
  takeLatest(SessionActionType.Create, createSession),
]
