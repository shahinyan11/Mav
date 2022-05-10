export enum PasswordActionType {
  Reset = 'password/reset',
  ResetSuccess = 'password/resetSuccess'
}

export interface PasswordResetAction {
  type: PasswordActionType.Reset
  payload: {
    email: string
  }
}

export interface PasswordResetSuccessAction {
  type: PasswordActionType.ResetSuccess
}
