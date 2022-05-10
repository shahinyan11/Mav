import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(22, 22, 22, 1)',
    position: 'relative',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
  },
  title: {
    color: '#FFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#828282',
  },
  slash: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFF00',
  },
  bottomContent: {
    width: '100%',
    paddingTop: 31,
    paddingBottom: 48,
  },
  bottomBox: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 31,
    marginLeft: 24,
  },
  bottomText: {
    color: 'rgba(136, 136, 136, 1)',
    marginTop: 14,
  },
})
