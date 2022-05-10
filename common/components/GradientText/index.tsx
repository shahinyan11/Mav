import { Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import MaskedView from '@react-native-community/masked-view'

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        // Button Linear Gradient
        colors={['rgba(22, 22, 22, 1)', 'rgba(22, 22, 22, 0)']}>
        <Text {...props} style={[props.style, { opacity: 0 }]} numberOfLines={3} />
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText
