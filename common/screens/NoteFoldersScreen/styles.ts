import { mobileRatio } from '@/helpers'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    width: 160,
    height: 200,
    backgroundColor: 'black',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  itemBackground: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  itemOverlay: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Helvet_regular',
    color: '#F2F4F6',
    fontSize: mobileRatio(12),
    lineHeight: 20,
    marginBottom: 2,
  },
  title: {
    fontFamily: 'Helvet_extraBold',
    color: '#FFF',
    fontSize: mobileRatio(20),
    lineHeight: 23,
  },
  count: {
    fontFamily: 'Helvet_regular',
    color: '#FAFAFA',
    fontSize: mobileRatio(14),
    lineHeight: 20,
  },
})
