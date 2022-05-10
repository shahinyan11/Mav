import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    width: 304,
    height: 408,
    overflow: 'hidden',
    margin: 10,
  },
  cardBgImage: {
    width: 304,
    height: 408,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesBox: {
    marginTop: 32,
    marginBottom: 34,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subTitle: {
    color: 'rgba(136, 136, 136, 1)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardImage: {
    flex: 1,
    width: 304,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bigButton: {
    backgroundColor: 'white',
    flex: 1,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
  },

})
