import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Content extends ApplicationRecord {
  static jsonapiType = 'content'
}
