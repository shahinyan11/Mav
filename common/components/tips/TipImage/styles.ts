import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  imageBox: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    paddingLeft: 22,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: 'Helvet_display_extraBold',
    color: '#FFF',
    fontWeight: '800',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(83, 83, 83, 1)',
    fontWeight: '400',
  },
})

