import { StyleSheet } from 'react-native'
import { device } from '@/constants'
import { mobileRatio, tabletRatio } from '@/helpers'

const { isTablet } = device

export default StyleSheet.create({
  container: {
    paddingTop: 85,
    paddingBottom: 48,
    alignItems: 'center',
    paddingHorizontal: isTablet ? tabletRatio(64) : 20,
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    width: isTablet ? tabletRatio(395) : mobileRatio(336),
    fontSize: 56,
    lineHeight: 64,
    marginBottom: 47,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: isTablet ? 'row' : 'column',
    alignItems: isTablet ? 'center' : 'flex-start',
    justifyContent: isTablet ? 'space-between' : 'flex-start',
    paddingHorizontal: isTablet ? tabletRatio(80) : mobileRatio( 34),
    paddingTop: 38,
    paddingBottom: 56,
    width: '100%',
    borderRadius: 10,
  },
  cardActive: {
    backgroundColor: '#FFF',
  },
  number: {
    fontWeight: 'bold',
    marginLeft: isTablet ? tabletRatio(20) : 0,
    fontSize: isTablet ? tabletRatio(288) : mobileRatio(144),
    color: 'rgba(255, 242, 0, 1)',
  },
  smallNumber: {
    fontWeight: 'bold',
    fontSize: tabletRatio(56),
    color: 'rgba(239, 239, 239, 1)',
  },
  text: {
    width: isTablet ? tabletRatio(448) : mobileRatio(247),
    fontSize: isTablet ? tabletRatio(24) : mobileRatio(16),
    lineHeight: isTablet ? tabletRatio(32) : mobileRatio(24),
    marginTop: isTablet ? 0 : 42,
    marginBottom: isTablet ? 0 : 56,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  textActive: {
    color: 'rgba(0, 0, 0, 1)',
  },
  dote: {
    height: 8,
    width: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  activeDote: {
    backgroundColor: 'rgba(255, 242, 0, 1)',
    height: 8,
    width: 8,
    borderRadius: 8,
    marginRight: 8,
  },
})
