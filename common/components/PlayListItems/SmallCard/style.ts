import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  SmallCardContainer: {
    width: ratio.width * 158,
    height: ratio.width * 158,
    borderRadius: ratio.width * 8,
    overflow: 'hidden',
  },
  SmallCardContainerItem: {
    paddingHorizontal: ratio.width * 23,
    paddingVertical: ratio.height * 27,
    width: ratio.width * 158,
    height: ratio.width * 158,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundContainer: {
    flex: 1,
  },
})
