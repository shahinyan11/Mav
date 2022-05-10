import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
//   container: {
//     margin: ratio.width * 8,
//     borderRadius: ratio.width * 16,
//     overflow: 'hidden',
//     flex: 1,
//   },
//   badgeTextStyle: {
//     fontSize: ratio.width * 12,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     paddingHorizontal: ratio.width * 10,
//     paddingVertical: ratio.height * 5,
//   },

  mainViewLG: {
    width: 240, height: 290, borderRadius: 10,
  },
  fullViewBg: {
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  nameStyle: { color: '#888888', fontSize: 14 },
  representationStyle: {
    color: '#000000',
    fontSize: 20,
    marginVertical: 0,
    fontFamily: 'Helvet_bold',
  },
  imageStyle: {
    width: 240,
    height: 230,
    overflow: 'hidden',
  },
  alignContentStyle: {
    alignItems: 'center',
    // paddingTop: 12,
    paddingTop: ratio.height*13,
  },
  plusIconStyle: {
    width: 20,
    height: 20,
    right: 15,
    position: 'absolute',
    bottom: 15,
  },
  elevation_one: { elevation: 1 },
  opacity1_2: { opacity: 1.2 },
})
