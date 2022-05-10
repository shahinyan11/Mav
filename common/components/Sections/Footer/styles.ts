import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    height: ratio.height * 88,
    backgroundColor: 'linearGradient(180deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.308) 100%)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
