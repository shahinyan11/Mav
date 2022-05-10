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
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
    borderRadius: 8,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
    lineHeight: 24,
    color: 'rgba(250, 250, 250, 0.4)',
  },

  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  questionsContainer: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
  },
})
