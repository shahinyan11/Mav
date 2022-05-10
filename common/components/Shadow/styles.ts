import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0 ,1)',
    position: 'absolute',
    bottom: 1,
    height: 25,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    width: '78%',
    alignSelf: 'center',
  },
})
