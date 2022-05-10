import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  globalContainer: {
    elevation: 14,
  },
  container: {
    width: ratio.width * 311,
    height: ratio.height * 520,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',

  },
  topContainer: {
    width: ratio.width * 311,
    height: ratio.height * 284,
    borderRadius: 8,
    overflow: 'hidden',
  },
  topContentBlock: {
    paddingHorizontal: ratio.width * 20,
    paddingTop: ratio.height * 20,
    paddingBottom: ratio.height * 16,
    flex: 1,
  },
  priceStyles: {
    fontSize: ratio.width * 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: ratio.height * 6,
  },
  typeStyles: {
    fontSize: ratio.width * 16,
    opacity: 0.5,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  discountContainer: {
    borderRadius: 16,
    marginTop: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  discountText: {
    fontSize: ratio.width * 10,
    fontWeight: '600',
    padding: ratio.width * 8,
    color: 'white',
  },
  bottomContainer: {
    paddingHorizontal: ratio.width * 20,
    paddingTop: ratio.height * 30,
    paddingBottom: ratio.height * 45,
  },
  description: {
    color: '#000000',
    fontSize: ratio.width * 16,
    textAlign: 'left',
    lineHeight: 24,
  },
  grey: {
    backgroundColor: '#EDEDED',
  },
  yellow: {
    backgroundColor: '#FFF200',
  },
  btnStyle: {
    borderWidth: 0,
    paddingVertical: ratio.height * 20,
    marginHorizontal: ratio.width * 20,
    marginTop: 'auto',
    marginBottom: ratio.height * 22,
  },
})
