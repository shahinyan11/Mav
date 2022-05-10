import { Dimensions } from 'react-native'

export const colors = {
  headerColor: '#68c91e',
  yellow: '#FFF200',
}

export const device = {
  isTablet: Dimensions.get('window').width > 600,
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
}

export const ratio = {
  width: Dimensions.get('window').width / 375,
  height: Dimensions.get('window').height / 776,
}
export const ratioTablet = {
  width: Dimensions.get('window').width / 1440,
}
