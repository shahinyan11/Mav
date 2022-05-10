import Registration from '@/models/Registration'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'

export interface RegistrationState {
  errors?: ValidationErrors<Registration>
}

export enum RegistrationActionType {
  Create = 'registration/create',
  ValidationErrors = 'registration/validation-errors'
}

export type RegistrationPayload = {
  name: string
  email: string
  password: string
  terms: boolean
  marketing: boolean
}

export interface RegistrationCreateAction {
  type: RegistrationActionType.Create
  payload: RegistrationPayload
}

export interface RegistrationValidationErrorsAction {
  type: RegistrationActionType.ValidationErrors
  payload: ValidationErrors<Registration>
}
