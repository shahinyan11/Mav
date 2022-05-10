import { StyleSheet } from 'react-native'
import { colors, device } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 88,
    elevation: 2,
    paddingHorizontal: 30,
    height: 88,
    paddingTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  animated: {
    width: '100%',
    paddingHorizontal: mobileRatio(20),
  },
  button: {
    backgroundColor: '#FFF',
    height: 64,
    marginTop: 40,
    marginBottom: 20,
    borderWidth: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})
