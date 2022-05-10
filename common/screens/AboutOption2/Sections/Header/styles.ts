import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(22, 22, 22, 1)',
  },
  background: {
    width: '100%',
    resizeMode: 'cover',
  },
  mainTitle: {
    padding: 20,
    marginLeft: ratio.width * 15,
    width: '100%',
    fontWeight: 'bold',
    fontSize: device.isTablet ? 112 : 56,
    lineHeight: device.isTablet ? 128 : 64,
    color: '#FFFFFF',
  },
  imagesContent: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 75,
  },
  leftBox: {
    paddingTop: 84,
    flex: 0.5,
  },
  rightBox: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  img1: {
    width: mobileRatio(160),
    height: mobileRatio(132),
    marginBottom: 20,
  },
  img2: {
    width: mobileRatio(160),
    height: mobileRatio(183),
  },
  img3: {
    width: mobileRatio(160),
    height: mobileRatio(132),
    marginBottom: 20,
  },
  img4: {
    width: mobileRatio(160),
    height: mobileRatio(197),
  },
})
