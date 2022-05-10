import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Account extends ApplicationRecord {
  static jsonapiType = 'account'
}
