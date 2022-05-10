import { StyleSheet } from 'react-native'
import { tabletRatio } from '@/helpers'

const styles = (theme: 'light' | 'dark', type?: 'full' | 'compact') => {
  const isLight = theme === 'light'
  const isFull = type === 'full'

  return StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingBottom: 0,
      alignItems: 'center',
      position: 'relative',
    },
    content: {
      paddingHorizontal: isFull ? null : 20,
      paddingVertical: 40,
      flexDirection: 'row',
      flexWrap: isFull ? 'nowrap' : 'wrap',
    },
    bgImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      resizeMode: 'stretch',
    },
    box: {
      width: isFull ? null : '50%',
      alignItems: isFull ? 'center' : null,
      marginBottom: 40,
      paddingHorizontal: isFull ? tabletRatio(64) : null,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      width: '100%',
    },
    title: {
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 16,
      color: '#828282',
    },
    slash: {
      fontWeight: 'bold',
      fontSize: 32,
      lineHeight: 40,
      color: '#FFFF00',
    },
    link: {
      color: isLight ? 'rgba(136, 136, 136, 1)' : 'rgba(130, 130, 130, 1)',
    },
    bottomContent: {
      width: '100%',
      paddingTop: 42,
      paddingBottom: 62,
      borderTopWidth: 1,
      borderTopColor: 'rgba(44, 44, 44, 1)',
      flexDirection: isFull ? 'row' : 'column',
      justifyContent: isFull ? 'space-between' : 'flex-start',
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    bottomText: {
      flexDirection: 'row',
      width: isFull ? null : '100%',
      marginBottom: 31,
      marginLeft: 24,
    },
    socialIcon: {
      marginHorizontal: 25,
    },
  })
}
export default styles
