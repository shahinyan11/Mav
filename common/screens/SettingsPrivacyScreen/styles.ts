import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    paddingHorizontal: mobileRatio(20),
    flex: 1,
    paddingTop: ratio.height * 12,
  },
  title: {
    fontFamily: 'Helvet_regular',
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 24,
    fontSize: 16,
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})
