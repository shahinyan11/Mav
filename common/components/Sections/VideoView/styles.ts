import { StyleSheet } from 'react-native'
import { device, ratioTablet } from '@/constants'
import { tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  video: {
    height: device.isTablet ? 600 : 300,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
})
