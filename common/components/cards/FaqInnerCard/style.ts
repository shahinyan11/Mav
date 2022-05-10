import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.2)',
  },
  yellowColor: {
    color: 'yellow',
  },
  textStyle: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
