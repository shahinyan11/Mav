import { Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Category extends ApplicationRecord {
  static jsonapiType = 'category'
}
