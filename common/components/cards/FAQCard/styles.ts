import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default StyleSheet.create({
  card: {
    height: 306,
    width: 370,
  },
  flex1: {
    flex: 1,
  },
  main: {
    height: 336,
    width: WIDTH - 40,
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
  },
  mainHover: {
    shadowColor: '#000',
    shadowOffset: { width: -6, height: 370 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    overflow: 'visible',
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    color: 'black',
    marginVertical: 10,
  },
  description: {
    color: '#888888',
    fontSize: 16,
    width: WIDTH / 2,
    lineHeight: 24,
  },
})
