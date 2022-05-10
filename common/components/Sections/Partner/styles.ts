import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    marginTop: 67,
    paddingBottom: 56,
  },
  title: {
    fontWeight: 'bold',
    width: '80%',
    fontSize: 40,
    lineHeight: 48,
    marginBottom: 68,
    marginLeft: 20,
  },
  partnerItem: {
    width: device.isTablet ? 192 : 105,
    height: device.isTablet ? 186 : 95,
    backgroundColor: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partnerIcon: {
    width: 48,
    height: 48,
  },
})
