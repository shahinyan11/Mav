import { StyleSheet } from 'react-native'
import { device, ratioTablet } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'
import { width } from 'styled-system'
export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: device.isTablet ? tabletRatio(100) : mobileRatio(40),
    paddingBottom: 65,
    paddingHorizontal: 20,
    flexDirection: device.isTablet ? 'row':'column',
    marginHorizontal: device.isTablet ? tabletRatio(64) : 0,
  },
  left: {
    width: device.isTablet ? '50%' : null,
    paddingLeft: device.isTablet ? tabletRatio(80) : 0,
  },
  right: {
    width: device.isTablet ? '50%' : null,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: device.isTablet ? tabletRatio(737) : null,
  },
  title: {
    fontWeight: 'bold',
    width: '80%',
    fontSize: 32,
    lineHeight: 41,
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  apply: {
    color: 'rgba(0, 0, 0, 1)',
  },
  JobItem: {
    height: 80,
    width: device.isTablet ? '100%' : mobileRatio(336),
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 32,
    paddingRight: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: 'rgba(83, 83, 83, 1)',
  },
  button: {
    width: device.isTablet ? tabletRatio(268): mobileRatio(336),
    backgroundColor: '#FFF200',
    height: 56,
    marginVertical: 48,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})
