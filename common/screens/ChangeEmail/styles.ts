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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: ratio.height * 15,
  },
  smallCardSmallText: {
    fontSize: ratio.width * 12,
    fontWeight: 'bold',
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
    width: '100%',
    paddingBottom: ratio.height * 27,
    alignItems: 'center',
  },
  paddingNone: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
})
