import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    margin: ratio.width * 8,
    borderRadius: ratio.width * 16,
    overflow: 'hidden',
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: ratio.width * 9,
    paddingVertical: ratio.height * 10,
  },
  badgeConatiner: {
    backgroundColor: 'rgba(250, 250, 250, 0.2)',
    borderRadius: 33,
  },
  badgeTextStyle: {
    fontSize: ratio.width * 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingHorizontal: ratio.width * 10,
    paddingVertical: ratio.height * 5,
  },

  title: {
    marginTop: 'auto',
    fontSize: ratio.width * 20,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: ratio.width * 9,
  },
  description: {
    fontSize: ratio.width * 12,
    color: 'white',
    paddingHorizontal: ratio.width * 9,
    paddingVertical: ratio.height * 10,
  },
})
