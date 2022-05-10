import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  tabBox: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  tab: {
    fontFamily: 'Helvet_medium',
    fontSize: 16,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  message: {
    minHeight: 80,
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 16,
    position: 'relative',
    shadowColor: 'rgba(0,0,0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  description: {
    fontFamily: 'Helvet_regular',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgba(250, 250, 250, 0.4)',
    marginVertical: 2,
  },
  name: {
    fontFamily: 'Helvet_regular',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
  },
  text: {
    fontFamily: 'Helvet_regular',
    color: '#fafafa',
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  questionsContainer: {
    height: 485,
    paddingBottom: 26,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scrollContainer: {
    width: '100%',
    marginTop: ratio.height * 27,
    paddingHorizontal: 20,
  },
})
