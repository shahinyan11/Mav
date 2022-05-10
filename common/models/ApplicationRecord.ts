import { SpraypaintBase, Model, MiddlewareStack } from 'spraypaint'
import AsyncStorage from '@react-native-async-storage/async-storage'

@Model()
export default class ApplicationRecord extends SpraypaintBase {
  static baseUrl = 'https://www.radium.academy'
  static apiNamespace = '/api/v1'
}

const middleware = new MiddlewareStack()

middleware.afterFilters.push((response, json) => {
  const accesstoken = response?.headers?.map?.authorization
  if (accesstoken) AsyncStorage.setItem('token', accesstoken)
})

middleware.beforeFilters.push(async (url, options) => {
  const token = await AsyncStorage.getItem('token')
  if (token) options.headers['token'] = token
})

ApplicationRecord.middlewareStack = middleware
