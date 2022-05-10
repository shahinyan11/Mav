import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    backgroundColor: 'rgba(22, 22, 22, 1)',
    paddingBottom: 28,
    paddingTop: 16,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 38,
    height: 4,
    backgroundColor: 'rgba(83, 83, 83, 1)',
    borderRadius: 2,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily: 'Helvet_medium',
  },
  inputContain: {
    height: 158,
    marginTop: 32,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  button: {
    height: 64,
    borderWidth: 0,
  },
  btnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },
})
