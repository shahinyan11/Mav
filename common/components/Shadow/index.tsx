import React from 'react'
import { View, ViewProps } from 'react-native'
import styles from './styles'

interface ShadowProps extends ViewProps {
  opacity?: number
}

const Shadow = ({ children, opacity }: ShadowProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={[
        styles.shadow,
        opacity ? { opacity: opacity } : { opacity: 0.6 },
      ]} />
      {children}
    </View>
  )
}

export default Shadow
