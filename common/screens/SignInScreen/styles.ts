import { mobileRatio } from '@/helpers'
import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
  // mainContainer: {
  //   zIndex: 2,
  //   marginBottom: 10,
  // },
  // containerStyle: {
  //   minHeight: '100%',
  //   paddingBottom: 30,
  // },
  // backgroundImage: {
  //   width: '100%',
  //   height: '100%',
  // },
  // socialIconStyle: { width: 25, height: 25 },
  // socialIconView: {
  //   backgroundColor: 'white',
  //   width: 45,
  //   height: 45,
  //   borderRadius: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 3,
  // },
  // socialIconExternal: {
  //   marginHorizontal: 200,
  //   width: '53%',
  //   justifyContent: 'space-around',
  //   flexDirection: 'row',
  //   marginVertical: 15,
  // },
  // bottomImageBgStyle: {
  //   height: 125,
  //   width: WIDTH,
  //   alignSelf: 'center',
  //   marginTop: 20,
  //   paddingTop: 27,
  // },
  // bottomView: {
  //   // alignSelf: 'center',
  //   width: Dimensions.get('window').width,
  //   alignItems: 'center',
  // },
  // dontHaveAnAccount: {
  //   color: '#717171',
  //   fontSize: 15,
  // },
  // signUpStyle: {
  //   color: '#000000',
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   marginTop: 12,
  // },
  // signInText: { fontSize: 40, fontWeight: 'bold' },
  // forgotPasswordText: {
  //   fontSize: 14,
  //   color: '#016FD0',
  // },
  // flex_row_align_center: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   alignContent: 'center',
  // },
  // rememberMeText: {
  //   color: '#717171',
  //   fontSize: 14,
  // },
  // unCheckBtnStyle: {
  //   width: 22,
  //   height: 22,
  //   marginRight: 5,
  //   marginTop: 4,
  // },
  // row_ai_justify_sb: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // height_35: {
  //   height: 35,
  // },
  // signInBtnStyle: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: 'black',
  // },
  // signInWithBtnStyle: {
  //   color: '#717171',
  //   fontSize: 14,
  // },
  // button: {
  //   height: 64,
  //   marginTop: 50,
  // },
  // buttonText: {
  //   fontWeight: '500',
  //   fontSize: 16,
  //   lineHeight: 24,
  //   color: 'black',
  // },
  // content: {
  //   paddingHorizontal: 20,
  //   // flex: 1,
  //   paddingBottom: 32,
  //   justifyContent: 'space-between',
  // },
  // title: {
  //   fontFamily: 'Helvet_extraBold',
  //   width: mobileRatio(320),
  //   fontSize: mobileRatio(40),
  //   lineHeight: mobileRatio(55),
  // },

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
  },
  title: {
    fontFamily: 'Helvet_bold',
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
    color: 'black',
  },
  row_ai_justify_sb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 3,
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
  mrminus_5: { marginTop: -5 },
  forgotPasswordText: {
    fontSize: 14,
    color: '#016FD0',
  },
})
