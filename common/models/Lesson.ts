import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Lesson extends ApplicationRecord {
  static jsonapiType = 'lesson'
}
