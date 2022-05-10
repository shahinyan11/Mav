import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionStyles: {
    marginBottom: ratio.height * 17,
  },
  dataStyles: {
    fontSize: ratio.width * 8,
  },
  content: {
    paddingHorizontal: ratio.width * 20,
  },
  title: {
    fontSize: ratio.width * 34,
    color: 'black',
    marginTop: ratio.height * 24,
    fontFamily: 'Helvet_display_extraBold',
  },
  subTitle: {
    color: 'black',
    fontSize: ratio.width * 12,
    lineHeight: ratio.height * 16,
    fontWeight: '400',
    fontFamily: 'Helvet_regular',
    marginBottom: ratio.height * 35,
    opacity: 0.6,
  },


})
