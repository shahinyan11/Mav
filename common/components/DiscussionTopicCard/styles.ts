import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 20,
    paddingRight: 12,
    marginTop: 16,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    width: 159,
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    fontWeight: '700',
  },
  circle: {
    width: 88,
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44,
  },
  number: {
    fontSize: 32,
    lineHeight: 40,
    color: '#fff',
    fontWeight: '800',
  },
  circleText: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(255,255,255, 0.6)',
    fontWeight: '800',
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255, 0.5)',
  },
})
