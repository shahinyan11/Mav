import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    paddingHorizontal: ratio.height * 20,
    margin: 'auto',
  },
  topContainer: {
    marginVertical: ratio.height * 45,
  },
  description: {
    fontSize: ratio.width * 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: ratio.width * 40,
    marginTop: ratio.height * 46,
    marginBottom: ratio.height * 36,
    lineHeight: 24,
  },
  titleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: ratio.width * 25,
  },
  title: {
    fontSize: ratio.width * 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: ratio.width * 4,
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
    paddingVertical: ratio.height * 20,
    flex: 1,
    borderWidth: 0,

  },
})
