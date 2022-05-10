import { StyleSheet } from 'react-native'
import { device, ratio } from '@/constants'
import { mobileRatio } from '@/helpers'

export default StyleSheet.create({
  container: {
    paddingTop: 36,
    flex: 1,
    position: 'relative',
  },
  content: {
    alignSelf: device.isTablet ? 'flex-end' : undefined,
    backgroundColor: device.isTablet ? 'white' : undefined,
    flex: device.isTablet ? 1 : undefined,
    flexDirection: device.isTablet ? 'row' : 'column',
  },
  title: {
    width: mobileRatio(258),
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: 'rgba(22, 22, 22, 1)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 32,
  },
  select: {
    height: 64,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 8,
    marginBottom: 24,
  },
  selectPlaceholder: {
    fontSize: 16,
    lineHeight: 25,
  },
  selectItem: {
    height: 72,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#F5F5F5',
    justifyContent: 'center',
  },
  selectItemText: {
    color: 'rgba(83, 83, 83, 1)',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    height: 56,
    margin: 16,
    marginTop: 52,
    borderWidth: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Helvet_medium',
    fontSize: 16,
    lineHeight: 24,
  },
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: ratio.width * 20,
    borderTopRightRadius: ratio.width * 20,
    paddingHorizontal: 20,
    zIndex: 9999999999,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
})
