import { StyleSheet } from 'react-native'

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
  cardHeader: { display: 'flex', flexDirection: 'row', borderRadius: 5, elevation: 8 },
  detailText: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 20,
  },
})
