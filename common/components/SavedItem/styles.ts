import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    width: mobileRatio(160),
    height: mobileRatio(160),
    borderRadius: ratio.width*10,
    overflow: 'hidden',
    position: 'relative',

  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    paddingTop: 12,
    paddingLeft: 16,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: ratio.width*14,
    lineHeight: ratio.width*24,
    opacity: 0.6,
    fontFamily: 'Helvet_medium',
  },
  number: {
    color: '#FFFFFF',
    fontSize: ratio.width*24,
    lineHeight: ratio.height*32,
    fontWeight: '400',
    marginTop: ratio.height*3,
  },
})
