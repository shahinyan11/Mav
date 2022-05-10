import { all, call, put, takeLatest } from 'redux-saga/effects'
import Storyfile from '@/app/storyfile'
import { interactWithStoryfile, loadStoryfileByID, storyfileDidLoad } from '@/store/storyfile/actions'
import {
  StoryfileActionTypes,
  StoryfileConfig,
  StoryfileConversationStarter,
  StoryfileDialogue,
} from '@/store/storyfile/types'
import { defaultInteractionConfig, StoryfileReply } from '@/api/storyfile'

function* watchStoryfileInteractions(action: ReturnType<typeof interactWithStoryfile>) {
  try {
    console.log(action.payload)
    const reply: StoryfileReply = yield call(Storyfile.interact, {
      ...defaultInteractionConfig,
      ...action.payload,
    })

    console.log('[AI] Reply: ', reply)
  }
  catch (error) {
    console.log('failed to interact with storyfile: ', error)
  }
}

function* watchLoadStoryfile(action: ReturnType<typeof loadStoryfileByID>) {
  try {
    const { id } = action.payload
    const [config, dialogue, conversationStarters]: [
      StoryfileConfig,
      StoryfileDialogue,
      StoryfileConversationStarter[]
    ] = yield all([
      call(Storyfile.getConfig, id),
      call(Storyfile.startSession, id),
      call(Storyfile.getConversationStarters, id),
    ])

    yield put(storyfileDidLoad({
      config,
      dialogue,
      conversationStarters,
    }))
  }
  catch (error) {
    console.log('error loading storyfile: ', error)
  }
}

export default [
  takeLatest(StoryfileActionTypes.WillLoad, watchLoadStoryfile),
  takeLatest(StoryfileActionTypes.Interact, watchStoryfileInteractions),
]
