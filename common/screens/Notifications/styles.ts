import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 28,
  },
  notification: {
    height: 180,
    width: '100%',
    borderRadius: 8,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  icon: {
    height: 48,
    width: 48,
    marginRight: 20,
  },
  yellowCircle: {
    width: 16,
    height: 16,
    backgroundColor: '#FFFA98',
    // position: 'absolute',
    marginBottom: -10,
    marginLeft: -6,
    borderWidth: 3,
    borderColor: '#FFF',
    borderRadius: 16,
    zIndex: 999999,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
    width: 240,
  },
  button: {
    height: 40,
    borderWidth: 0,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})
