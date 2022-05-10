import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  toastContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    zIndex: 2,
    paddingBottom: 25,

  },
  messageText: {
    fontSize: ratio.width * 16,
    fontFamily: 'Helvet_display_bold',
  },
  success: {
    backgroundColor: '#FFF200',
  },
  error: {
    backgroundColor: '#FF6B6B',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  animatableItem: {
    height: '100%',
    width: '100%',
  },
})
