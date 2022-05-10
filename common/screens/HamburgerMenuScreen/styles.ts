import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    paddingHorizontal: mobileRatio(20),
  },
  title: {
    fontFamily: 'Helvet_bold',
    paddingBottom: 20,
    paddingTop: 24,
    fontSize: 16,
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#FFF',
    height: 64,
    marginTop: 40,
    marginBottom: 20,
    borderWidth: 0,
  },

  buttonText: {
    fontSize: ratio.width * 16,
    lineHeight: ratio.height * 24,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Helvet_medium',
  },
})
