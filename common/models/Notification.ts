import { Attr, Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Notification extends ApplicationRecord {
  static jsonapiType = 'notification'

  @Attr() id?: string
  @Attr() unread = true
  @Attr() type: string
  @Attr() params: { title: string }
}
