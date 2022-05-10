import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 20,
    // flex: 1,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvet_extraBold',
    width: mobileRatio(320),
    fontSize: mobileRatio(40),
    lineHeight: mobileRatio(55),
  },
  text: {
    fontSize: mobileRatio(14),
    marginTop: 22,
    marginBottom: 32,
    width: mobileRatio(310),
    lineHeight: 22,
    color: '#161616',
  },
  button: {
    width: mobileRatio(335),
    height: 64,
    marginTop: 16,
    borderWidth: 0,
    // position:"absolute",
    // bottom:10
  },
  signInBtnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },
  row_ai_justify_sb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex_row_align_center: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  rememberMeText: {
    color: '#717171',
    fontSize: 14,
  },
  unCheckBtnStyle: {
    width: 22,
    height: 22,
    marginRight: 5,
    marginTop: 4,
  },
  height_35: {
    height: 35,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#016FD0',
  },
})
