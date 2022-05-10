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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  blur: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    position: 'absolute',
    bottom: 0,
  },
  progressIndicator: {
    height: '100%',
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: 'Helvet_display_extraBold',
    color: 'rgba(22,22,22, 1)',
    marginBottom: 26,
    fontWeight: '800',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(83, 83, 83, 1)',
    fontWeight: '400',
  },
})

