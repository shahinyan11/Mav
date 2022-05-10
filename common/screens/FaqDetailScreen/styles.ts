import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.2)',
  },
  blur: {
    height: '100%',

  },
  mainScrollStyle: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#E5E5E5',
    minHeight: '100%',
  },
  slash: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFF00',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  scrollableView: {
    height: 260,
  },
  card: {
    width: 192,
    height: 256,
    marginRight: 40,
  },
  cardImage: {
    flex: 1,
    width: 192,
    height: 256,
    justifyContent: 'center',
    position: 'relative',
  },
  blurView: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 16,
    position: 'absolute',
  },
  cardTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  commonHeadingStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
    paddingTop: 40,
  },
  faqInnerCardStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  imagebackgroundInnerStyle: {
    width: WIDTH,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: HEIGHT,
  },

})
