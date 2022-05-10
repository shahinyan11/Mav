import { Attr, Model } from 'spraypaint'
import ApplicationRecord from '@/models/ApplicationRecord'

export type CourseData = {
  id: number
}

@Model()
export default class Course extends ApplicationRecord {
  static jsonapiType = 'course'

  @Attr() id: string
  @Attr() name: string
  @Attr() title: string
}
