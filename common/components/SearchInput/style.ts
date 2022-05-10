import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  InputContainerItem: {
    height: ratio.height * 48,
    width: '100%',
    borderWidth: 0,
    borderRadius: ratio.height * 8,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Helvet_regular',
    padding: 10,
    fontWeight: '400',
    fontSize: ratio.width*16,
    lineHeight: ratio.width*24,
  },
  InputContainer: {
    width: '100%',
    zIndex: 1,
  },
  InputContainerShadow: {
    width: '100%',
    height: 34,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
