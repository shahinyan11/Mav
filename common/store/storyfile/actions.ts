import { StoryfileInteraction } from '@/api/storyfile'
import { StoryfileActionTypes, StoryfileState } from './types'

export const interactWithStoryfile = (interaction: StoryfileInteraction) => ({
  type: StoryfileActionTypes.Interact,
  payload: interaction,
})

export const loadStoryfileByID = (id: string) => ({
  type: StoryfileActionTypes.WillLoad,
  payload: { id },
})

export const storyfileDidLoad = (config: StoryfileState) => ({
  type: StoryfileActionTypes.DidLoad,
  payload: config,
})
