import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: WIDTH,
    padding: 20,
    paddingVertical: 40,
    backgroundColor: 'white',
    marginTop: 90,
  },
  headingStyle: { color: '#000000', fontSize: 25, lineHeight: 24 },
  textInputStyle: {
    borderRadius: 10,
    height: 55,
    marginBottom: 20,
    borderColor: 'white',
    paddingLeft: 15,
    backgroundColor: '#F5F5F5',
    fontSize: 18,
  },
  mt_40: {
    marginTop: 40,
  },
  withInText: {
    marginVertical: 10,
    fontSize: 16,
  },
  dropDownView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  dropDownStyle: {
    borderRadius: 10,
    height: 55,
    borderColor: 'white',
    paddingLeft: 15,
    backgroundColor: '#F5F5F5',
    width: '90%',
    fontSize: 16,
    color: 'black',
  },
  dropDownIconView: {
    width: '10%',
  },
  dropDownIcon: {
    height: 12,
    width: 18,
  },
  categoryModal: {
    height: 200,
    width: '100%',
    marginTop: -15,
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  selectedItemStyle: {
    borderColor: 'grey',
    padding: 10,
    alignItems: 'center',
  },
})
