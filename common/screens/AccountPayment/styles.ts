import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ratio.height*20,
    paddingHorizontal: ratio.width * 20,
  },
  title: {
    fontWeight: '700',
    fontSize: ratio.width * 16,
    paddingTop: ratio.height*28,
    marginBottom: ratio.width * 16,
    color: '#181A1C',
  },
  paymentText: {
    marginTop: ratio.height * 25,
    marginBottom: ratio.height * 36,
  },
  changePaymentMethod: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderWidth: 0,
    marginTop: 20,
    marginBottom: 40,
  },
  paymentCardContainer: {
    width: '100%',
    height: 184,
    backgroundColor: 'black',
    borderRadius: 8,
  },

})
