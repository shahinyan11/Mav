import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    paddingHorizontal: ratio.width * 20,
    marginTop: ratio.height * 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: ratio.width * 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
