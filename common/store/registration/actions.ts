import Registration from '@/models/Registration'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'
import { RegistrationPayload, RegistrationCreateAction, RegistrationActionType, RegistrationValidationErrorsAction } from './types'

export const registerUser = (payload: RegistrationPayload): RegistrationCreateAction => ({
  type: RegistrationActionType.Create,
  payload: payload,
})

export const registerUserValidationErrors = (payload: ValidationErrors<Registration>): RegistrationValidationErrorsAction => ({
  type: RegistrationActionType.ValidationErrors,
  payload: payload,
})
