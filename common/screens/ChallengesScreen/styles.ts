import { mobileRatio } from '@/helpers'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  srcollList: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  itemSeparator: {
    width: 16,
    height: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Helvet_medium',
    fontSize: mobileRatio(15),
    lineHeight: 23,
    textAlign: 'center',
    color: '#000',
  },
  challengesOuterCard: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  challengeCard: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  challengesBadge: {
    width: 110,
    height: 110,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
})
