import { StoryfileID } from '@/api/storyfile'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { interactWithStoryfile, loadStoryfileByID } from '@/store/storyfile/actions'
import { useCallback, useEffect } from 'react'

export const useStoryfile = (id: string) => {
  const storyfile = useAppSelector((state) => state.storyfile)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadStoryfileByID(id))
  }, [id])

  const interact = useCallback((message: string) => {
    const { dialogue: { sessionId } } = storyfile

    dispatch(interactWithStoryfile({
      sessionID: sessionId,
      message,
    }))
  }, [storyfile])

  return {
    ...storyfile,
    interact,
  }
}

export const useConversationStarters = (id: StoryfileID) => {
  const { conversationStarters } = useStoryfile(id)
  return conversationStarters
}
