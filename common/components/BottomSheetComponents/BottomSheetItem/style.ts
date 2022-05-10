import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  BottomSheetContainer: {
    alignItems: 'center',
  },
  BottomSheetText: {
    color: '#888888',
    fontSize: ratio.width * 16,
    fontWeight: '400',
    lineHeight: ratio.height*24,
    fontFamily: 'Helvet_medium',
  },
  BottomSheetGlobalContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
})
