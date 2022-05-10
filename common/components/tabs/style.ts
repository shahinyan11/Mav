import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default (colors: any) => {
  return StyleSheet.create({
    tabTitle: {
      // color: colors.inActive || '#888888',
      color: 'rgba(192, 192, 192, 1)' || '#888888',
      // color:'rgba(192, 192, 192, 1)',
      // fontWeight: 'bold',
      marginBottom: ratio.width * 4,
      fontSize: 20,
      lineHeight: 28,
      fontFamily: 'Helvet_bold',
    },
    activeText: {
      color: 'rgba(192, 192, 192, 1)' || 'white',
      // color: colors.active || 'white',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginBottom: ratio.height * 40,
    },
    tabContent: {
      padding: ratio.width * 5,
    },
    activeTab: {
      position: 'absolute',
      zIndex: 1,
      width: '80%',
      bottom: 0,
      height: ratio.height * 4,
      borderRadius: ratio.width * 24,
      backgroundColor: '#FFF200',
      marginHorizontal: ratio.width * 8,
    },
  })
}
