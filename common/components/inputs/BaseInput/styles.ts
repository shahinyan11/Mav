import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    height: 64,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  input: {
    paddingLeft: 0,
    width: '100%',
    fontWeight: '400',
    backgroundColor: '#fff',
    borderColor: '#fff',
    marginLeft: -17,
  },
  defaultLabelStyles: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  defaultErrorMessageStyles: {
    color: '#FF6B6B',
    marginLeft: 16,
    marginTop: 4,
  },
  // inputWithoutLabel: {
  //   height: 40,
  //   paddingTop: 4,
  // },
  icon: {
    width: ratio.width*24,
    height: ratio.height*24,
    position: 'absolute',
    left: -8,
    top: '42%',
    transform: [{ translateY: -18 }],
  },
  eyeIcon: { left: 'auto', right: 16, transform: [{ translateY: -4 }] },
  secureTextEntryInput: { width: '93%' },
})
