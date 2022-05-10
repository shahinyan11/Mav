import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: ratio.width * 16,
    lineHeight: 24,
  },
  linkRightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: ratio.width * 15,
    flex: 1,
  },

})

