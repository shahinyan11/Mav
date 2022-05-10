import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'

export default StyleSheet.create({
  BottomSheetContainer: {
  },
  BottomSheetText: {
    color: '#888888',
    fontSize: ratio.width * 16,
  },
  BottomSheetGlobalContainer: {
    flex: 1,
    paddingHorizontal: ratio.width * 20,
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
  textInput: {
    backgroundColor: 'transparent',
    fontSize: ratio.width * 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: ratio.width * 20,
    marginBottom: ratio.height * 12,
  },
  textInputContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: ratio.height * 158,
    marginBottom: ratio.height * 24,
  },
  addDesctiprion: {
    fontSize: ratio.width * 14,
    color: '#888888',
    textAlign: 'center',
  },
})
