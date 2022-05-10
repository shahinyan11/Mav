import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardExpandedView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 0.95,
  },
  dropIcon: { flex: 0.05 },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 8,
  },
  detailText: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 20,
  },
  imageStyle: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  flex_row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyle: {
    fontSize: ratio.width * 16,
    flex: 1,
    marginLeft: ratio.width * 15,
    lineHeight: ratio.width * 24,
  },
  btnStyle: {
    fontSize: 14,
    fontFamily: 'Helvet_medium',
  },
  maincardView: {
    borderRadius: ratio.width * 8,
    width: '98%',
    padding: ratio.width * 20,
    alignSelf: 'center',
    borderWidth: 1,
  },
  margin_30: {
    marginTop: 30,
    borderRadius: ratio.width * 7,
  },
})
