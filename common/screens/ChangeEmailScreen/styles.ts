import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 36,
    justifyContent: 'space-between',
  },
  top: {
    paddingTop: 58,
  },
  title: {
    fontWeight: 'bold',
    width: mobileRatio(295),
    fontSize: mobileRatio(40),
    lineHeight: mobileRatio(48),
  },
  text: {
    width: mobileRatio(330),
    marginBottom: 28,
  },
  forgotText: {
    fontFamily: 'Helvet_regular',
    marginTop: 32,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
  },
  lastText: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    width: mobileRatio(335),
    height: 64,
    borderWidth: 0,
  },
  signInBtnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
})
