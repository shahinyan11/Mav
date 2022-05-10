import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  blur: {
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginTop: ratio.height*25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTitle: {
    fontFamily: 'Helvet_bold',
    fontSize: 16,
    lineHeight: 24,
  },
  popularText: {
    fontFamily: 'Helvet_regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#535353',
    marginLeft: 23,
  },
  txtInputStyle: {
    height: 44,
    width: '100%',
    marginVertical: 12,
    marginHorizontal: 1,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    // elevation: 5,
    padding: 10,
  },
  ph_15mt_30: { paddingHorizontal: 15, marginTop: 30, marginBottom: 25, width: '100%' },
  scrolltxtView: {
    marginRight: 20,
    paddingVertical: 5,
    // borderRadius:1
  },
  scrollTxtStyle: {
    fontSize: 16,
    fontFamily: 'Helvet_bold',
  },
  imageStyle: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    flex: 1,
  },
  headingtext: {
    fontSize: 16,
    fontFamily: 'Helvet_bold',
    paddingBottom: 10,
    paddingTop: 18,
    paddingStart: 15,
  },
  pH_12: {
    paddingHorizontal: 12,
  },
  pt_20: {
    paddingTop: 20,
  },
  mainViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  singleImg: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  txtStyle: {
    fontSize: 16,
    fontFamily: 'Helvet_bold',
    marginHorizontal: 18,
  },
  maintxtStyle: {
    color: 'black',
    fontSize: 32,
    paddingTop: 15,
    fontFamily: 'Helvet_bold',
  },
  pt_2mv_5: {
    paddingTop: 2,
    marginVertical: 5,
  },
  pb_20: {
    paddingBottom: 20,
  },
})
