import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: device.isTablet ? tabletRatio(65) : 0,
  },
  top: {
    paddingHorizontal: 20,
  },
  topImg: {
    width: 180,
    height: 140,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 52,
    marginTop: 20,
    marginLeft: device.isTablet ? 119 : 0,
  },
  center: {
    marginTop: 37,
    marginBottom: 49,
    flexDirection: device.isTablet ? 'row' : 'column',
    justifyContent: device.isTablet ? 'space-between' : null,
  },
  leftImage: {
    width: device.isTablet ? tabletRatio(527) : mobileRatio(168),
    height: device.isTablet ? tabletRatio(600) : mobileRatio(305),
    bottom: device.isTablet ? tabletRatio(-174) : null,
  },
  right: {
    alignItems: 'flex-end',
    marginTop: device.isTablet ? 0 : 20,
  },
  rightImage: {
    width: device.isTablet ? tabletRatio(752) : mobileRatio(267),
    height: device.isTablet ? tabletRatio(600) : mobileRatio(213),
    // height: 200,
  },
  bottom: {
    paddingHorizontal: device.isTablet ? null : 20,
    alignItems: device.isTablet ? 'flex-end' : 'flex-start',
    paddingRight: device.isTablet ? tabletRatio(143) : null,
  },
  text: {
    width: device.isTablet ? tabletRatio(450) : null,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
})
