import { Attr, Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Session extends ApplicationRecord {
  static jsonapiType = 'sessions'

  @Attr() email: string
  @Attr() password: string
}
