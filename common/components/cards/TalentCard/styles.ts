import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  fullCard: {
    // backgroundColor: '#5C5959',
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  width_10P: {
    width: '10%',
  },
  AI_Icon: {
    width: 16,
    height: 16,
    marginLeft: 12,
  },
  flex_1: { flex: 1 },
  txtStyle: {
    color: 'white',
    fontSize: 19,
  },
  pillLabelStyle: {
    // alignSelf: 'flex-end',
    // paddingHorizontal: 10,
    // marginRight: 12,
    // borderRadius: 10,
    // // padding:8,
    // paddingVertical:1
    // paddingBottom:4


    paddingHorizontal: 10,
    paddingVertical: 1.5,
    position: 'absolute',
    right: 0,
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 4,
  },
  pillLabel: {
    paddingBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
    textShadowOffset: { width: 0.3, height: 0.4 },
    textShadowRadius: 1,
  },
})
