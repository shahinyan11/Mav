import { Model, Attr } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

@Model()
export default class Registration extends ApplicationRecord {
  static jsonapiType = 'registrations'

  @Attr() name: string
  @Attr() email: string
  @Attr() password: string
}
