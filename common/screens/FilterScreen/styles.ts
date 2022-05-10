import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'
import { device, ratio } from '@/constants'

export default StyleSheet.create({
  blurView: {
    flex: 1,
    paddingBottom: 25,
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: ratio.height * 50,
  },
  groupContain: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupTitle: {
    color: '#fff',
    fontSize: ratio.width * 16,
    lineHeight: ratio.height * 32,
    fontWeight: '500',
    fontFamily: 'Helvet_regular',

  },
  optionText: {
    color: '#C0C0C0',
    fontSize: ratio.width * 16,
    lineHeight: ratio.height * 24,
    fontFamily: 'Helvet_medium',
  },
  optionContain: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    marginBottom: 10,
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: mobileRatio(335),
    height: 52,
    borderWidth: 0,
  },
  btnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },
  checkbox: {
    width: ratio.width * 16,
    height: ratio.width * 16,
    borderRadius: ratio.width * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noBorder: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: 'transparent',
  },

})
