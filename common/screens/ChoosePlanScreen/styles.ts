import { StyleSheet, Dimensions } from 'react-native'
import { mobileRatio } from '@/helpers'
import { device } from '@/constants'

const { windowWidth } = device

export default StyleSheet.create({
  mainContainer: {
    zIndex: 2,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_regular',
  },
  flatlistContainer: {
    paddingHorizontal: (windowWidth - mobileRatio(335 + 8)) / 2, // 335 is the width of FlatLists item and 8 is margin horizontal
  },
  button: {
    height: 64,
    marginTop: 50,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    fontFamily: 'Helvet_regular',
  },
})
