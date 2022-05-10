import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  imagebg: {
    width: Dimensions.get('window').width,
    height: 610,
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
    marginTop: -40,
  },
  heading: {
    color: 'white',
    fontSize: 56,
    lineHeight: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 165,
  },
  topView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 1,
    padding: 18,
    justifyContent: 'center',
    marginTop: 110,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headText: {
    color: '#D0D0D0',
    fontSize: 16,
    flex: 1,
  },
  touchable: {
    backgroundColor: '#FFF200',
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchablelogo: { width: 20, height: 20 },
})
