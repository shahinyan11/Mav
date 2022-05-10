import { Platform } from 'react-native'

export const API_URL
  = Platform.OS === 'android'
    ? 'http://192.168.11.42:19002'
    : 'http://192.168.11.42:19000'
