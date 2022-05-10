import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  btnStyle: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnText: {
    fontSize: 16,
    paddingVertical: ratio.height * 14,
    fontWeight: 'bold',
  },
  yellowBG: {
    backgroundColor: '#FFF200',
  },
  grayBG: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  whiteBG: {
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
  },
  grayText: {
    color: '#000000',
  },
})
