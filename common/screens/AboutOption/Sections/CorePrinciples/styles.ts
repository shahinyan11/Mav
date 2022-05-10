import { StyleSheet } from 'react-native'
import { ratio, device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: mobileRatio(20),
    alignItems: 'center',
  },
  item: {
    width: mobileRatio(247),
    alignItems: 'center',
    marginRight: mobileRatio(20),
  },

  card: {
    backgroundColor: '#FFF',
    height: mobileRatio(458),
    width: mobileRatio(247),
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 48,
  },
  itemBackground: {
    height: mobileRatio(458),
    width: mobileRatio(247),
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
    fontWeight: 'bold',
    fontSize: 56,
    lineHeight: 64,
    marginTop: 80,
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
    paddingTop: 80,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
  },
  button: {
    height: 75,
    width: 75,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 242, 0, 1)',
    marginTop: 48,
    marginBottom: 112,
    borderWidth: 0,
  },
})
