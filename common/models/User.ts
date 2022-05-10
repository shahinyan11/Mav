import { Model, HasMany, Attr } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'
import Member from '@/models/Member'

@Model()
export default class User extends ApplicationRecord {
  static jsonapiType = 'users'

  @Attr() firstName: string
  @Attr() name: string
  @Attr() email: string
  @Attr() password: string
  @Attr() password_confirmation: string
  @Attr() skip_password_validation: string

  @HasMany() members: Member[]
}
