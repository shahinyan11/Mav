import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    height: ratio.height * 152,
    marginHorizontal: ratio.width * 20,
    backgroundColor: '#FFFFFF',
    marginBottom: ratio.height * 16,
    borderRadius: ratio.width * 8,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 1,
    borderColor: '#FFFFFF',
  },
  videoContainer: {
    width: ratio.width * 131,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rigthContainer: {
    paddingLeft: ratio.width * 16,
    paddingRight: ratio.width * 12,
    paddingBottom: ratio.width * 12,
    paddingTop: ratio.width * 17,
    flex: 1,
  },
  dateText: {
    color: '#C0C0C0',
    fontSize: ratio.width * 8,
    lineHeight: ratio.height*16,
    fontFamily: 'Helvet_bold',
    fontWeight: '700',
  },
  titleText: {
    color: '#000000',
    fontSize: ratio.width * 16,
    lineHeight: ratio.height*24,
    fontWeight: '700',
  },
  descriptionText: {
    color: '#535353',
    fontSize: ratio.width * 14,
    lineHeight: ratio.height*20,
    fontWeight: '400',
  },
  addIconContainer: {
    marginTop: 'auto',
  },
  progress: {
    height: ratio.height * 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
    width: '50%',
    backgroundColor: '#FFF200',
  },
  progressContainer: {
    height: ratio.height * 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  nameStyle: {
    color: '#C0C0C0',
    fontSize: ratio.width * 12,
    lineHeight: ratio.height*16,
    fontFamily: 'Helvet_medium',
    fontWeight: '500',
  },
})
