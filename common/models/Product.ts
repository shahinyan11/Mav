import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Product extends ApplicationRecord {
  static jsonapiType = 'product'
}
