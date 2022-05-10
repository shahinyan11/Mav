import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default StyleSheet.create({

  imagebackgroundInnerStyle: {
    width: WIDTH,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: HEIGHT,
  },
  faqInnerCardStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },

})
