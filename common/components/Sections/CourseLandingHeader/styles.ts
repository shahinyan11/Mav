import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    minHeight: ratio.height * 119,
    justifyContent: 'center',
    paddingHorizontal: ratio.width * 20,

  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBtnContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: ratio.height * 8,
    padding: ratio.height * 8,
  },
  mainTitle: {
    fontSize: ratio.width * 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
})
