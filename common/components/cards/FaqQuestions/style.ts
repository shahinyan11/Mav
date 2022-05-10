import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',

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
    color: '#535353',
    fontSize: 16,
    flex: 1,
  },
  expandTitleText: {
    color: '#000000',
    fontSize: 16,
    flex: 1,
  },

  dropIcon: { width: 50, height: 50 },
  cardHeader: { display: 'flex', flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: '#00000080',
    fontWeight: 'normal',
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 24,

  },
})
