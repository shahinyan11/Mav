import { StyleSheet } from 'react-native'
import { device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 31,
    alignItems: 'center',
    paddingBottom: 49,
    alignSelf: 'center',
    paddingHorizontal: device.isTablet ? 79 : 20,
  },
  title: {
    fontWeight: '700',
    fontSize: device.isTablet ? tabletRatio(40) : mobileRatio(24),
    lineHeight: device.isTablet ? tabletRatio(48) : mobileRatio(32),
    marginBottom: 64,
  },
  fieldBox: {
    height: 64,
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  label: {
    color: 'rgba(136, 136, 136, 1)',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  inputContainer: {
    paddingHorizontal: 11,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#FFF200',
    height: 56,
    marginTop: 50,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})
