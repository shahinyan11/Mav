import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  paymentCardContainer: {
    flex: 1,
    borderRadius: ratio.width*8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  paymentCardItem: {
    flex: 1,
  },

  cardContainer: {
    margin: ratio.height*20,
  },

  cardType: {
    width: ratio.width*50,
    height: ratio.height*20,
    resizeMode: 'contain',
    marginBottom: ratio.height * 40,
  },

  paymentCardNumbersContainer: {
    width: ratio.width * 255,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: ratio.height * 17,
    marginLeft: ratio.width*7,
  },

  paymentCardNumbersText: {
    color: '#FFFFFF',
    opacity: 0.8,
    fontSize: ratio.width * 20,
    lineHeight: ratio.width*24,
    fontWeight: '700',
    fontFamily: 'Helvet_medium',
  },

  paymentCardMonth: {
    fontFamily: 'Helvet_medium',
    fontSize: ratio.width * 14,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: ratio.height * 17,
    marginLeft: ratio.width*7,
  },

  paymentCardOwner: {
    color: '#FFFFFF',
    opacity: 0.4,
    fontWeight: '700',
    fontSize: ratio.width * 14,
    lineHeight: ratio.width*20,
    letterSpacing: 2,
    marginLeft: ratio.width*7,
    marginBottom: ratio.height*10,

  },
})
