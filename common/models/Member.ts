import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Member extends ApplicationRecord {
  static jsonapiType = 'member'
}
