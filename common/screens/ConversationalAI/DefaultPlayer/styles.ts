

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
  mainContainer: {
    width: '100%',
    flex: 1,
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
    alignItems: 'center',
  },
  tickStyle: {
    width: 25,
    height: 19,
  },
  row_al_center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultPlayerUi: {
    marginTop: ratio.height * 27,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: ratio.width * 16,
    borderTopLeftRadius: ratio.width * 16,
    paddingHorizontal: ratio.width * 20,
    paddingVertical: ratio.height * 28,
  },
  defaultTxtStyle: {
    fontSize: 16,
    color: '#000000',
  },
})
