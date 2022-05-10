import { StyleSheet } from 'react-native'
import { device } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignSelf: device.isTablet ? 'flex-end' : null,
    backgroundColor: device.isTablet ? 'white' : null,
    flex: device.isTablet ? 1 : null,
    flexDirection: device.isTablet ? 'row' : 'column',
  },
  title: {
    width: device.isTablet ? null : 228,
    fontWeight: 'bold',
    fontSize: 56,
    lineHeight: 64,
    paddingTop: 16,
    paddingBottom: 24,
    paddingLeft: 24,
    marginVertical: device.isTablet ? 50 : 0,
  },
  blur: {
    height: '100%',
  },
})
