import Session from '@/models/Session'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'

export enum SessionActionType {
  Create = 'session/create',
  CreateSuccess = 'session/create/success',
  ValidationErrors = 'session/validation-errors'
}

export type SessionPayload = {
  email: string
  password: string
}

export interface SessionCreateAction {
  type: SessionActionType.Create
  payload: SessionPayload
}

export interface SessionValidationErrorsAction {
  type: SessionActionType.ValidationErrors
  payload: ValidationErrors<Session>
}

export interface SessionCreateSuccessAction {
  type: SessionActionType.CreateSuccess
  payload: string
}
