import { StyleSheet } from 'react-native'
import { ratio, device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    paddingTop: 81,
  },
  item: {
    minWidth: device.isTablet ? tabletRatio(416) : mobileRatio(336),
    height: 520,
    alignItems: 'center',
    marginHorizontal: 5,

  },

  card: {
    backgroundColor: '#FFF',
    height: 520,
    width: device.isTablet ? tabletRatio(416) : mobileRatio(336),
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 48,
  },
  itemBackground: {
    height: 520,
    width: device.isTablet ? tabletRatio(416) : mobileRatio(336),
    resizeMode: 'stretch',
    borderRadius: 10,
    position: 'absolute',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 48,
    color: '#FFF',
  },
  title: {
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 36,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  list: {
    width: '100%',
  },
  listContainer: {
    paddingTop: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: (device.windowWidth - mobileRatio(336) - 10) / 2, // 335 is the width of FlatLists item and 8 is margin horizontal

  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
  },
  // button: {
  //   height: 75,
  //   width: 75,
  //   borderRadius: 75,
  //   backgroundColor: 'rgba(255, 242, 0, 1)',
  //   marginTop: 48,
  //   marginBottom: 112,
  //   borderWidth: 0,
  // },
})
