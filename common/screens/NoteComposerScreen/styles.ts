import { mobileRatio } from '@/helpers'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  title: {
    width: '100%',
    marginBottom: 16,
    fontSize: mobileRatio(40),
    lineHeight: 48,
    fontFamily: 'Helvet_display_extraBold',
    color: '#161616',
  },
  text: {
    width: '100%',
    fontSize: 16,
    lineHeight: 20,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
  },
  button: {
    height: 52,
    width: 161,
    borderWidth: 0,
    marginHorizontal: 5,
  },
  btnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },

})
