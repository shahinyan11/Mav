import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    width: mobileRatio(160),
    height: mobileRatio(190),
    backgroundColor: '#2E242F',
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 15,
    overflow: 'hidden',
  },
  img: {
    width: mobileRatio(160),
    height: mobileRatio(160),
    paddingTop: 12,
    paddingLeft: 16,
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
  },
  txtStyle: {
    fontSize: ratio.width * 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: ratio.width * 10,
    marginTop: ratio.height * 20,
  },
})
