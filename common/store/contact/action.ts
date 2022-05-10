import { ContactActionType, ContactUsSendAction } from './types'

export const sendContactUs = (): ContactUsSendAction => ({
  type: ContactActionType.Send,
})
