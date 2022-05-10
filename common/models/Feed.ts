import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Feed extends ApplicationRecord {
  static jsonapiType = 'feed'
}
