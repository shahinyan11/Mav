import { Attr, Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Password extends ApplicationRecord {
  static jsonapiType = 'passwords'

  @Attr() email: string
}
