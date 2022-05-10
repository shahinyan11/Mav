import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    height: 322,
    backgroundColor: 'rgba(22, 22, 22, 1)',
    paddingBottom: 28,
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
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
    width: 332,
    height: 138,
    marginTop: 32,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 335,
    borderWidth: 0,
  },
  btnStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Helvet_medium',
  },
})
