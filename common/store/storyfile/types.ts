export enum StoryfileActionTypes {
  WillLoad = 'storyfile/willLoad',
  DidLoad = 'storyfile/didLoad',
  Interact = 'storyfile/interact',
  ConfigWillLoad = 'storyfile/configWillLoad',
  ConfigDidLoad = 'storyfile/config/didLoad',
  ConversationStartersWillLoad = 'storyfile/conversationStarters/willLoad',
  ConversationStartersDidLoad = 'storyfile/conversationStarters/didLoad',
}

export interface StoryfileConfig {
  id: number
  username: string
  cannotAnswerVideo: string
  waitingVideo: string
  thumbnail: string
  avatar: string
  bio: string
}

export interface StoryfileDialogue {
  sessionId: string
}

export interface StoryfileConversationStarter {
  id: number
  text: string
  'sort_order': number
  topic: {
    name: string
    'sort_order': number
  }
}

export interface StoryfileState {
  config: StoryfileConfig
  dialogue: StoryfileDialogue
  conversationStarters: StoryfileConversationStarter[]
}
