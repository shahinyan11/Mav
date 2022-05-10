import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Section extends ApplicationRecord {
  static jsonapiType = 'section'
}
