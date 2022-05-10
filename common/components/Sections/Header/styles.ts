import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  mainTitle: {
    marginLeft: ratio.width * 20,
    width: mobileRatio(257),
    fontWeight: '800',
    fontSize: device.isTablet ? 112 : 32,
    lineHeight: device.isTablet ? 128 : 36,
    color: '#FFFFFF',
    position: 'absolute',
    top: -59,
    left: 0,
  },
  imagesContent: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 149,
  },
  leftBox: {
    width: '100%',
    height: device.isTablet ? 400 : 150,
  },
  bottomLeftImg: {
    // width: '35%',
    width: ratio.width * 129,
    resizeMode: 'stretch',
    height: device.isTablet ? 400 : 150,
  },
  centerBox: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rightBox: {
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 120,
    height: device.isTablet ? 509 : 190,
  },
  topRightImg: {
    // width: '45%',
    width: ratio.width * 174,
    resizeMode: 'stretch',
    height: device.isTablet ? 509 : 190,
  },
  rightAbsoluteImg: {
    position: 'absolute',
    // width: '35.5%',
    width: ratio.width * 171,
    height: device.isTablet ? 551 : 185,
    right: ratio.width * 32,
    top: device.isTablet ? 409 : 175,
  },
  leftAbsoluteImg: {
    position: 'absolute',
    // width: '32.5%',
    width: ratio.width * 149,
    left: ratio.width * 30,
    bottom: device.isTablet ? 300 : 135,
    height: device.isTablet ? 587 : 186,
  },


})
