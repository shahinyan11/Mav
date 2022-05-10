import { StyleSheet } from 'react-native'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container:
    {
      paddingBottom: 36,
      overflow: 'hidden',
      marginHorizontal: 4,
    },
  card: {
    width: mobileRatio(335),
    height: 400,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 16,
  },

  imageContainer: {
    width: mobileRatio(335),
    height: 222,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  cardBgImage: {
    width: mobileRatio(335),
    height: 222,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFFFF',
    fontFamily: 'Helvet_display_bold',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Helvet_regular',
  },
  bottomText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    width: 300,
    marginTop: 25,
    color: '#000',
    fontFamily: 'Helvet_regular',
  },
  bottom: {
    width: 62,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  saveText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
    fontFamily: 'Helvet_bold',
  },
})
