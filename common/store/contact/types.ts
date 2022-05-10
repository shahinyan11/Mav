export interface ContactUsState {
  topics: Array<string>,
  selectedTopic?: string,
  message: string,
}

export enum ContactActionType {
  Send = 'contactUs/send',
  SetTopics = 'contactUs/set',
  GetTopics = 'contactUs/get',
  SetActiveTopic = 'contactUs/activeTopic',
  SetMessage = 'contactUs/setMessage',
}

export type ContactSendPayload = {
  topic: string
  message: string
}
export interface ContactUsSendAction {
  type: ContactActionType.Send
}
