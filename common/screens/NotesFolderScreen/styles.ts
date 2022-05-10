import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topImg: {
    backgroundColor: '#000',
  },
  searchBox: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    height: 48,
    color: 'rgba(255, 255, 255, 1)',
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  content: {
    flex: 1,
    height: 500,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'relative',
  },
  starting: {
    marginTop: 30,
    marginLeft: 16,
  },
  item: {
    width: '100%',
    height: 134,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  title: {
    marginBottom: 8,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Helvet_bold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Helvet_regular',
    color: '#fff',
    opacity: 0.6,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Helvet_bold',
    color: '#161616',
  },
  itemDesc: {
    fontFamily: 'Helvet_regular',
    fontSize: 14,
    lineHeight: 20,
  },
})
