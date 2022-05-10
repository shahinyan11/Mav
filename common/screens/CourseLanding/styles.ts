import { StyleSheet } from 'react-native'
import { ratio } from '@/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  blur: {
    height: '100%',
  },
  topContent: {
    paddingHorizontal: ratio.width * 20,
    marginTop: ratio.height * 153,
    flex: 1,
  },
  topTitle: {
    fontSize: ratio.width * 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: ratio.width * 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: ratio.height * 16,
    marginBottom: ratio.height * 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: ratio.height * 36,
  },
  buttonContainerBottom: {
    flexDirection: 'row',
    marginBottom: ratio.height * 36,
    marginTop: ratio.height * 32,
    paddingHorizontal: ratio.width * 20,
  },
  flatListContainer: {
    width: '100%',
    borderTopLeftRadius: ratio.width * 16,
    borderTopRightRadius: ratio.width * 16,
    marginTop: ratio.height * -20,
    backgroundColor: '#F5F5F5',
    paddingVertical: ratio.height * 40,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: ratio.width * 16,
    borderTopRightRadius: ratio.width * 16,
    marginTop: -ratio.height * 30,
  },
  bottomLogoContainer: {
    alignItems: 'center',
    marginVertical: ratio.height * 30,
  },
  bottomImageContainer: {
    marginHorizontal: ratio.width * 20,
    height: ratio.height * 535,
    borderRadius: ratio.width * 16,
    overflow: 'hidden',
    marginBottom: 50,
  },
  bottomContainerText: {
    fontSize: ratio.width * 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: ratio.width * 50,
    marginTop: ratio.height * 53,
  },
  fixedHeader: {
    height: ratio.height * 98,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 70,
    zIndex: 33,
  },
  fixedHeaderContent: {
    paddingHorizontal: ratio.width * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack: {
    marginRight: ratio.width * 20,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    padding: ratio.width * 20,
    zIndex: 2,
  },
  yellowBTN: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFF200',
    borderWidth: 0,
    flex: 1,
  },
  grayBTN: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 0,
    flex: 1,
  },
})
