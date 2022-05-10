export const caseRegex = /(?=.*[a-z])(?=.*[A-Z])/
export const numericRegix = /(?=.*\d)/
export const specialRegex = /(?=.*[@$!%*#?&])/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/

export const validatePassword = (password: string): boolean => {
  return passwordRegex.test(password)
}

export interface PasswordValidationResults {
  case: boolean
  numeric: boolean
  special: boolean
  length: boolean
}

export const validatePasswordParts = (password: string): PasswordValidationResults => {
  return {
    case: caseRegex.test(password),
    numeric: numericRegix.test(password),
    special: specialRegex.test(password),
    length: password.length >= 7,
  }
}
