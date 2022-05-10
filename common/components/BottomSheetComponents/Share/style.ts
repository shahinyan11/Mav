import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  socialIconsStyles: {
    width: ratio.width * 24,
    height: ratio.width * 24,
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ratio.height * 45,

  },
  circleButton: {
    width: ratio.width * 64,
    height: ratio.width * 64,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: ratio.height * 20,
    margin: 'auto',
    justifyContent: 'center',
  },
  bottomButtons: {
    paddingVertical: ratio.height * 20,
    borderWidth: 0,
  },
  lightBG: {
    backgroundColor: '#F5F5F5',
  },
  grayBG: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  mb16: {
    marginBottom: ratio.height * 16,
  },

  containerHeader: {
    marginTop: ratio.height * 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: ratio.width * 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

})
