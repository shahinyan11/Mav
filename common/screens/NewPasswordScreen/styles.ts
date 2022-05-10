import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'
import { ratio } from '@/constants'

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
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvet_extraBold',
    width: mobileRatio(320),
    fontSize: mobileRatio(40),
    lineHeight: mobileRatio(55),
  },
  text: {
    marginTop: ratio.height * 22,
    marginBottom: ratio.height * 27,
    lineHeight: 22,
    color: '#2C2C2C',
    fontSize: ratio.width * 16,
    fontWeight: '400',
  },
  signInBtnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },

  grey: {
    backgroundColor: '#EDEDED',
  },
  yellow: {
    backgroundColor: '#FFF200',
  },
  btnStyle: {
    borderWidth: 0,
    paddingVertical: ratio.height * 20,
  },
  requirements: {
    fontSize: ratio.width * 14,
    fontWeight: '500',
    marginTop: ratio.height * 7,
    marginBottom: ratio.height * 16,
  },
  requiredText: {
    fontSize: ratio.width * 14,
    color: '#888888',
    lineHeight: 20,
    marginLeft: ratio.width * 8,
  },
  requiredTextContainer: {
    marginBottom: ratio.height * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
