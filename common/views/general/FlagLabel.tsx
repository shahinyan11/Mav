import React, { FC, ReactElement, ReactText } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from '@ui-kitten/components'

import backgroundLight from '@/assets/components/label-light.png'
import backgroundDark from '@/assets/components/label-dark.png'
import { theme } from '@/config/theme'

interface Props {
  children: ReactElement | ReactText,
  status?: 'light' | 'dark',
}

const settings = (status: string) => (
  status === 'light'
    ? { gradient: ['#FFFFFF', '#C1C1C1'], background: backgroundLight, color: theme['text-control-color'] }
    : { gradient: ['#1C1C1C', '#484848'], background: backgroundDark, color: theme['color-basic-800'] }
)

const FlagLabel: FC<Props> = ({ children, status = 'light' }) => {
  const { gradient, background, color } = settings(status)
  const styleText = StyleSheet.flatten([styles.text, { color }])

  return (
    <View style={styles.container}>
      <LinearGradient colors={gradient} style={styles.controlContainer} end={{ x: 1, y: 0.5 }}>
        <Text style={styleText} status='control' category="label">{children}</Text>
      </LinearGradient>
      <ImageBackground source={background} style={{ width: 11.5, height: 30 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  controlContainer: {
    height: 30,
    paddingTop: 2,
    paddingBottom: 4,
    paddingRight: 22,
    paddingLeft: 32,
  },
  text: {
    lineHeight: 24,
  },
})

export default FlagLabel
