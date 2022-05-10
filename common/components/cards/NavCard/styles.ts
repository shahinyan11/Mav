import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    width: 192,
    height: 256,
    marginRight: 40,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    width: 192,
    height: 256,
    justifyContent: 'center',
    position: 'relative',
  },
  blurView: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
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
})
