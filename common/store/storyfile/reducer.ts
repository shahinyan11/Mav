import { AnyAction } from 'redux'
import {
  StoryfileActionTypes,
  StoryfileConfig,
  StoryfileConversationStarter,
  StoryfileDialogue,
  StoryfileState,
} from './types'

const initialState: StoryfileState = {
  config: {} as StoryfileConfig,
  dialogue: {} as StoryfileDialogue,
  conversationStarters: [] as StoryfileConversationStarter[],
}

export default (state = initialState, action: AnyAction): StoryfileState => {
  switch (action.type) {
    case StoryfileActionTypes.DidLoad:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
