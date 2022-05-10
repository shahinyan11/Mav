import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  blur: {
    height: '100%',
  },
  slash: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFF00',
    marginBottom: 40,
  },
  titleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 32,
    lineHeight: 48,
    textAlignVertical: 'center',
  },
  section: {
    marginTop: 8,
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 32,
  },
  accardionContainer: {
    marginVertical: 8,
  },
  scrollableView: {
    height: 260,
  },
  card: {
    width: 192,
    height: 256,
    marginRight: 40,
  },
  cardImage: {
    flex: 1,
    width: 192,
    height: 256,
    justifyContent: 'center',
    position: 'relative',
  },
  blurView: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 16,
    position: 'absolute',
  },
  cardTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
})
