// import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'
import Session from '@/models/Session'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'
import { SessionActionType, SessionCreateAction, SessionPayload, SessionValidationErrorsAction } from './types'

export const createSession = (payload: SessionPayload): SessionCreateAction => ({
  type: SessionActionType.Create,
  payload: payload,
})

export const createSessionValidationErrors = (errors: ValidationErrors<Session>): SessionValidationErrorsAction => ({
  type: SessionActionType.ValidationErrors,
  payload: errors,
})

// export const registerUserValidationErrors = (payload: ValidationErrors<Registration>): RegistrationValidationErrorsAction => ({
//   type: RegistrationActionType.ValidationErrors,
//   payload: payload,
// })
