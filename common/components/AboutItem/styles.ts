import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'

export default StyleSheet.create({
  aboutContainer: {
    marginHorizontal: ratio.width * 20,
    paddingHorizontal: ratio.width * 32,
    paddingVertical: ratio.width * 40,
    backgroundColor: 'white',
    borderRadius: ratio.width * 8,
  },
  aboutText: {
    fontSize: ratio.width * 16,
    lineHeight: ratio.width * 28,
  },
})
