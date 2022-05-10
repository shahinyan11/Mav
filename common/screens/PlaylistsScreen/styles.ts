import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: ratio.width * 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: ratio.height * 32,
  },
  topCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ratio.width * 20,
    marginTop: ratio.height * 19,
    marginBottom: ratio.height * 28,
  },
  smallCardBoldText: {
    fontSize: ratio.width * 16,
    lineHeight: ratio.height * 24,
    fontFamily: 'Helvet_medium',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: ratio.height * 15,
  },
  smallCardSmallText: {
    fontSize: ratio.width * 12,
    fontFamily: 'Helvet_medium',
    opacity: 0.7,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16,
  },
  gray: {
    color: '#888888',
  },
  black: {
    color: '#000000',
  },
  white: {
    color: '#ffffff',
  },
  largeCardContainer: {
    paddingHorizontal: ratio.width * 20,
  },
  toplargeCard: {
    marginBottom: 24,
  },
  gradientImageStyle: {
    flex: 1,
    width: '100%',
    // marginTop: ratio.height * 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  paddingNone: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
})
