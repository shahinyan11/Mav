import { StyleSheet } from 'react-native'
import { device } from '@/constants'

export default StyleSheet.create({
  container: {
    backgroundColor: device.isTablet ? null : '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 56,
  },
  top: {
    flexDirection: device.isTablet ? 'row' : 'column',
    justifyContent: device.isTablet ? 'space-between' : null,
  },
  row: {
    marginVertical: device.isTablet ? 30 : 0,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 40,
  },
  input: {
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  text: {
    color: 'black',
  },
  select: {
    width: '100%',
  },
  button: {
    alignSelf: device.isTablet ? 'flex-start' : 'flex-end',
    width: 160,
    height: 56,
    backgroundColor: 'rgba(255, 242, 0, 1)',
    borderRadius: 8,
  },
})
