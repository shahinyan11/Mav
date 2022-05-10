import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  searchBox: {
    flexDirection: 'row',
    height: 48,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 13,
    paddingHorizontal: 16,
  },
  message: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
    borderRadius: 8,
    position: 'relative',
  },
  name: {
    fontFamily: 'Helvet_regular',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  description: {
    fontFamily: 'Helvet_regular',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    color: '#000',
  },
  icon: {
    position: 'absolute',
    top: 6,
    right: 8,
  },

})
