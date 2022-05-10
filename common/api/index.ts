import Password from '@/models/Password'
import Session from '@/models/Session'
import Registration from '@/models/Registration'

export default class API {
  password = {
    reset: async (email: string): Promise<[boolean, Password]> => {
      const password = new Password({ email: email })
      return Promise.resolve([await password.save(), password])
    },
  }
  session = {
    create: async (sessionsData: object): Promise<[boolean, Session]> => {
      const data = new Session(sessionsData)
      return Promise.resolve([await data.save(), data])
    },
  }
  registration = {
    create: async (data: object): Promise<[boolean, Registration]> => {
      const registration = new Registration(data)
      return Promise.resolve([await registration.save(), registration])
    },
  }
}
