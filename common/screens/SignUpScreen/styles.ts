import { StyleSheet, Dimensions } from 'react-native'
import { mobileRatio } from '@/helpers'

const WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Helvet_bold',
    width: mobileRatio(320),
    fontSize: mobileRatio(40),
    lineHeight: mobileRatio(55),
    marginBottom: 35,
  },
  blur: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  containerStyle: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  contentBackground: {
    width: '100%',
    paddingBottom: 30,
  },
  socialIconStyle: { width: 25, height: 25 },
  socialIconView: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  socialIconExternal: {
    marginHorizontal: 200,
    width: '53%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 15,
  },
  bottomImageBgStyle: {
    height: 125,
    width: WIDTH,
    alignSelf: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    paddingTop: 27,
  },
  bottomView: {
    // alignSelf: 'center',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  dontHaveAnAccount: {
    color: '#717171', fontSize: 15,
  },
  signUpStyle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },
  mV_24: {
    marginVertical: 24,
  },
  signInText: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  socialIcons: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  socialItem: {
    borderRadius: 8,
    backgroundColor: 'white',
    width: mobileRatio(100),
    height: 65,
    marginRight: mobileRatio(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: '#000000', fontSize: 14,
  },
  flex_row_align_center: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginBottom: 16,
  },
  checkListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  text_14_20: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Helvet_regular',
  },
  checkText: {
    marginLeft: 8,
    color: '#888888',
  },
  requirements: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  text: {
    color: 'rgba(136, 136, 136, 1)',
    fontSize: 14,
    width: mobileRatio(304),
    marginLeft: 4,
  },
  checkBtn: {
    width: 16,
    height: 16,
    borderRadius: mobileRatio(4),
    marginRight: mobileRatio(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  height_35: {
    height: 35,
  },
  button: {
    marginTop: 8,
    height: 64,
    marginBottom: 24,
  },
  signInBtnStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  signInWithBtnStyle: {
    color: '#717171',
    fontSize: 14,
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
})
