import { ratioTablet, ratio } from '@/constants'
import { API_URL } from './config'
import { Alert, Animated } from 'react-native'
import * as Font from 'expo-font'

export const mobileRatio = (value: number) => {
  return ratio.width * value
}

export const mobRatioHeight = (value: number) => {
  return ratio.height * value
}

export const tabletRatio = (value: number) => {
  return ratioTablet.width * value
}

export async function fetchPublishedKey() {
  try {
    const response = await fetch(`${API_URL}/config`)
    const { publishableKey } = await response.json()
    return publishableKey
  }
  catch (e) {
    console.log(e)
    console.warn('Unable to fetch publishable key. Is your server running?')
    Alert.alert('Error', 'Unable to fetch the publishable key. Is your server running?')
  }
}

export function customInterpolator({ current, inverted, layouts: { screen } }) {
  const { multiply } = Animated
  return {
    cardStyle: {
      transform: [{
        translateY: multiply(
            current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen.height, 0],
              extrapolate: 'clamp',
            }),
            inverted,
        ),
      }],
      opacity: current.progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }
}

export const getFonts = () => {
  return (
    Font.loadAsync({
      'Helvet_bold': require('@/assets/fonts/HelveticaNowText-Bold.ttf'),
      'Helvet_extraBold': require('@/assets/fonts/HelveticaNowText-ExtraBold.ttf'),
      'Helvet_medium': require('@/assets/fonts/HelveticaNowText-Medium.ttf'),
      'Helvet_regular': require('@/assets/fonts/HelveticaNowText-Regular.ttf'),
      'Helvet_display_regular': require('@/assets/fonts/HelveticaNowDisplay-Regular.ttf'),
      'Helvet_display_bold': require('@/assets/fonts/HelveticaNowDisplay-Bold.ttf'),
      'Helvet_display_extraBold': require('@/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf'),
    })
  )
}
export const colors = {
  black: 'black',
  yellowBtn: '#FFF200',
  white: '#FFFFFF',
  unSelectedText: '#535353',
  lightBorder: '#FAFAFA',
}
