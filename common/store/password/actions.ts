import { PasswordActionType, PasswordResetAction, PasswordResetSuccessAction } from './types'

export const initiatePasswordReset = (email: string): PasswordResetAction => ({
  type: PasswordActionType.Reset,
  payload: { email },
})


export const PasswordResetSuccess = (): PasswordResetSuccessAction => ({
  type: PasswordActionType.ResetSuccess,
})
