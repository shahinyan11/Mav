import { StyleSheet } from 'react-native'
import { colors } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    color: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 12,
  },
  label: {
    fontFamily: 'Helvet_regular',
    fontSize: 16,
    lineHeight: 24,
  },
  yellowLine: {
    height: 4,
    width: 48,
    borderRadius: 4,
    backgroundColor: colors.yellow,
    marginTop: 8,
  },
  contentTitle: {
    fontFamily: 'Helvet_display_bold',
    fontSize: 32,
    lineHeight: 40,
    marginTop: 23,
    marginBottom: 33,
  },
  title: {
    fontFamily: 'Helvet_bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    marginTop: 40,
    marginBottom: 24,
  },
  text: {
    fontFamily: 'Helvet_regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  blur: {
    height: '100%',
  },

})
