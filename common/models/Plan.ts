import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Plan extends ApplicationRecord {
  static jsonapiType = 'plan'
}
