import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    marginTop: ratio.height * 27,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: ratio.width * 16,
    borderTopLeftRadius: ratio.width * 16,
    paddingHorizontal: ratio.width * 20,
    paddingVertical: ratio.height * 28,
  },
  switchStyle: {
    marginBottom: ratio.height * 32,
  },
})
