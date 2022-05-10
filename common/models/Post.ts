import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Post extends ApplicationRecord {
  static jsonapiType = 'post'
}
