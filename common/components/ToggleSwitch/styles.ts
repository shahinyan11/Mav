import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: ratio.width * 15,
    flex: 1,
  },
  toggleContainerSty: {
    width: 54,
    height: 28,
    borderRadius: 20,
    padding: 3,
  },
  toggleCircleStyle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  txtHeading: { fontSize: 16, color: '#181A1C' },
})

