import { Platform, StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  blur: {
    height: '100%',
  },
  headerTopStyle: {
    backgroundColor: 'black',
    paddingBottom: 20,
    overflow: 'hidden',
  },
  topContent: {
    paddingHorizontal: ratio.width * 20,
    marginTop: ratio.height * 153,
    flex: 1,
  },
  topTitle: {
    fontSize: ratio.width * 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: ratio.width * 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: ratio.height * 16,
    marginBottom: ratio.height * 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: ratio.height * 36,
  },
  buttonContainerBottom: {
    flexDirection: 'row',
    marginBottom: ratio.height * 36,
    marginTop: ratio.height * 32,
    paddingHorizontal: ratio.width * 20,
  },
  flatListContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingBottom: ratio.height * 40,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: ratio.width * 16,
    borderTopRightRadius: ratio.width * 16,
    marginTop: -ratio.height * 40,
  },
  bottomLogoContainer: {
    alignItems: 'center',
    marginVertical: ratio.height * 30,
  },
  bottomImageContainer: {
    marginHorizontal: ratio.width * 20,
    height: ratio.height * 535,
    borderRadius: ratio.width * 16,
    overflow: 'hidden',
    // marginBottom: 50,
  },
  ConversationBigImage: {
    overflow: 'hidden',
    width: Platform.OS == 'ios' ? ratio.width * 335 : ratio.width * 355,
    height: Platform.OS == 'ios' ? ratio.height * 331 : ratio.height * 418,
    marginTop: Platform.OS == 'ios' ? 24 : 0,
    borderBottomRightRadius: ratio.width * 16,
  },
  bottomContainerText: {
    fontSize: ratio.width * 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingHorizontal: ratio.width * 40,
    marginTop: ratio.height * 53,
  },
  lightText: {
    fontSize: ratio.width * 16,
    color: '#FFFFFF',
    opacity: 0.5,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  goBack: {
    marginRight: ratio.width * 20,
  },
  txtStyle: {
    fontSize: ratio.width * 16,
    color: '#000000',
    fontFamily: 'Helvet_bold',
  },
  viewstyle: {
    marginTop: 20,
    marginBottom: 15,
    marginStart: 20,
  },
  showLessTxt: {
    fontSize: 13,
    // fontFamily: 'Helvet_medium',
    fontFamily: 'Helvet_bold',
  },
  showLessView: { paddingHorizontal: 22, paddingVertical: 10 },
  descriptionText: {
    paddingHorizontal: 20,
    fontSize: 18,
    lineHeight: 24,
    color: '#000000',
  },
  startText: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Helvet_extraBold',
  },
  startView: { marginTop: 20, marginStart: 20, marginBottom: 10 },
  flex_1: { flex: 1 },
  videoPlayerStyle: {
    width: 480,
    height: 200,
  },
  leftIconStyle: {
    width: 20,
    height: 20,
    alignContent: 'flex-end',
    marginTop: -10,
  },
  m_10: {
    marginTop: -10,
  },
  mb_600: {
    marginBottom: 600,
  },
  width_100P: {
    width: '100%',
  },
  menuIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  menuIconView: {
    width: 40,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  headerTopRightStyle: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingRight: 10,
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  topIconsStyle: { marginHorizontal: 9, backgroundColor: 'transparent' },
})
