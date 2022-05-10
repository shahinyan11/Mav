import { StyleSheet } from 'react-native'
import { mobileRatio, mobRatioHeight } from '@/helpers'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: mobRatioHeight(127),
  },
  card: {
    backgroundColor: '#fff',
    height: mobRatioHeight(510),
    borderRadius: 16,
  },
  top: {
    position: 'relative',
    height: mobRatioHeight(256),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topImage: {
    width: mobRatioHeight(126),
    height: mobRatioHeight(126),
    position: 'absolute',
    top: mobRatioHeight(31) * -1,
  },
  topBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    borderRadius: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '800',
    marginBottom: 22,
  },
  textsBox: {
    alignItems: 'center',
    paddingBottom: mobRatioHeight(59),
  },
  topText: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
  bottom: {
    alignItems: 'center',
    marginTop: mobRatioHeight(35),
  },
  socialsBox: {
    width: '100%',
    paddingHorizontal: mobileRatio(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: mobRatioHeight(32),
  },
  iconBox: {
    width: 64,
    borderRadius: 64,
    marginHorizontal: 5,
    overflow: 'hidden',
    paddingBottom: 15,
  },
  iconCircle: {
    width: 64,
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'stretch',
  },
  bottomText: {
    color: 'rgba(22, 22, 22, 1)',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },

})
