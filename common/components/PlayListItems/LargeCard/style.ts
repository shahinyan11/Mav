import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  LargeBlockContainer: {
    width: '100%',
    height: ratio.height * 158,
    position: 'relative',
    marginTop: 13,
  },
  LargeCardContainerAhead: {
    width: '100%',
    height: ratio.height * 158,
    position: 'absolute',
    zIndex: 3,
    borderRadius: ratio.height*8,
    overflow: 'hidden',
  },
  LargeCardContainerTheMiddle: {
    width: '93%',
    height: ratio.height * 158,
    position: 'absolute',
    zIndex: 2,
    top: -7,
    alignSelf: 'center',
    borderRadius: ratio.height*8,
    overflow: 'hidden',
  },
  LargeCardContainerEnd: {
    width: '81%',
    height: ratio.height * 158,
    position: 'absolute',
    zIndex: 1,
    top: -13,
    alignSelf: 'center',
    borderRadius: ratio.height*8,
    overflow: 'hidden',
  },
  backgroundContainer: {
    width: '100%',
    height: ratio.height*158,
    justifyContent: 'flex-end',
  },
  gradienBackground: {
    width: '100%',
  },
  gradienItem: {
    padding: ratio.width * 15,
  },
  title: {
    color: 'white',
    fontSize: ratio.width * 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
    fontWeight: '400',
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontWeight: '400',
    fontFamily: 'Helvet_medium',
    fontSize: ratio.width * 12,

  },
})
