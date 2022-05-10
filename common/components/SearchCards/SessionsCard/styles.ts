import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({


  mainViewLG: {
    width: 240, height: 290, borderRadius: 10,
  },
  opacity1_2: { opacity: 1.2 },
  nameStyle: { color: '#FFFFFF', fontSize: 12 },
  representStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvet_bold',
    marginVertical: 5,
  },
  EpTxt: {
    position: 'absolute',
    left: 14,
    bottom: 15,
    color: '#FFFFFF',
  },
  sessionAddView: {
    right: 15,
    position: 'absolute',
    bottom: 15,
  }, sessionAddBtn: {
    width: 25,
    height: 25,
  },
  p_10ph_14: {
    padding: 10, paddingHorizontal: 14,
  },
  sessionImgBg: {
    width: 160,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
})
