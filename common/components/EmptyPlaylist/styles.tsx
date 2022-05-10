import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

const styles= StyleSheet.create(
    {
      container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
      },
      titleContainer: {
        paddingHorizontal: ratio.width * 20,
        marginBottom: ratio.height *28,
      },
      content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
      title: {
        fontSize: ratio.width * 32,
        fontWeight: '800',
        color: 'black',
        marginTop: ratio.height * 48,
        marginBottom: ratio.height * 8,
      },
      text: {
        fontSize: ratio.width * 16,
        fontWeight: '400',
        lineHeight: 24,
        color: '#000000',
        marginTop: ratio.height * 24,
      },
    },
)

export { styles }
