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
    paddingTop: 48,
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
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Helvet_regular',
    color: '#161616',
  },
  text_14_20: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Helvet_regular',
  },
  checkListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  checkText: {
    marginLeft: 8,
    color: '#888888',
  },
  forgotText: {
    fontFamily: 'Helvet_bold',
    marginTop: 28,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
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
