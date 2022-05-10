import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  content: {
    // paddingHorizontal: mobileRatio(20),
  },
  mainContainer: { width: '100%', flex: 1 },
  conversationUI: {
    marginTop: ratio.height * 27,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: ratio.width * 16,
    borderTopLeftRadius: ratio.width * 16,
    paddingHorizontal: ratio.width * 20,
    paddingVertical: ratio.height * 28,
  },
  title: {
    fontFamily: 'Helvet_regular',
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 24,
    fontSize: 16,
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  row_al_center: { flexDirection: 'row', alignItems: 'center' },
  textStyle: {
    fontSize: 16,
    color: '#888888',
    lineHeight: 24,
    marginVertical: 20,
    marginRight: 10,
    fontFamily: 'Helvet_regular',
  },
  txtHeading: { fontSize: 16, color: '#181A1C' },
  resolutionTxt: { fontSize: 16, color: '#535353', marginRight: 10 },
  toggleContainerSty: {
    width: 54,
    height: 28,
    borderRadius: 20,
    padding: 3,
  },
  toggleCircleStyle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  arrowForward: { width: 12, height: 15 },

})
