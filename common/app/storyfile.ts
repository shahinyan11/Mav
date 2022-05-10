import StoryfileClient, { StoryfileGateway } from '@/api/storyfile'

const Storyfile = new StoryfileClient({
  apiKey: '4100ac8c-028a-49d5-b83d-4823e57e371b',
  gateway: StoryfileGateway.development,
})

Object.freeze(Storyfile)
export default Storyfile
