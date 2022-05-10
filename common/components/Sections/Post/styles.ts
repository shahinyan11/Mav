import { StyleSheet } from 'react-native'
import { device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  content: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  imageBg: {
    paddingLeft: device.isTablet ? tabletRatio(177) : mobileRatio(52),
    paddingBottom: device.isTablet ? 270 : 84,
    paddingTop: device.isTablet ? 120 : 62,
    resizeMode: 'stretch',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: device.isTablet ? 24 : 16,
    lineHeight: device.isTablet ? 32 : 24,
    marginBottom: device.isTablet ? 72 : 27,
  },

  textContainer: {
    flexDirection: device.isTablet ? 'row' : 'column',
  },
  description: {
    marginBottom: 32,
    marginRight: device.isTablet ? tabletRatio(144) : 0,
    fontWeight: 'bold',
    fontSize: device.isTablet ? 40 : 24,
    lineHeight: device.isTablet ? 48 : 32,
    width: device.isTablet ? tabletRatio(527) : mobileRatio(231),
  },
  text: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    width: device.isTablet ? tabletRatio(400) : mobileRatio(280),
  },
})
