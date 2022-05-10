import { StyleSheet } from 'react-native'
import { device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: mobileRatio(52),
    marginHorizontal: mobileRatio(20),
    paddingBottom: 44,
    marginTop: -30,
    borderRadius: 8,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 48,
    marginBottom: 27,
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
  bottomText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 48,
  },
})
