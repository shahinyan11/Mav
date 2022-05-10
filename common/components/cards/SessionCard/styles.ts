import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    height: 306,
    width: 640,
    borderRadius: 20,
    overflow: 'hidden',
  },
  text: {
    color: '#FFFFFF',
  },
  cardBgImage: {
    height: 296,
    width: 640,

  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 41,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  description: {
    flex: 1,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  bottom: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigButton: {
    backgroundColor: 'gray',
    color: '#FFFFFF',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  playIcon: {
    marginRight: 15,
  },
  smallButton: {
    backgroundColor: 'gray',
    color: '#FFFFFF',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
  },
  statusBar: {
    height: 10,
    backgroundColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderBottomEndRadius: 5,
  },
})
