import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Price extends ApplicationRecord {
  static jsonapiType = 'price'
}
