import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: mobileRatio(282),
    marginTop: 40,
    marginBottom: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lightBG: {
    backgroundColor: '#F5F5F5',
  },
  grayBG: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  grey: {
    backgroundColor: '#2C2C2C',
  },
  yellow: {
    backgroundColor: '#FFF200',
  },
  btnStyle: {
    height: 64,
    width: 156,
    borderWidth: 0,
  },
})
