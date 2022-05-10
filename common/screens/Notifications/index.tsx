import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'
import Foreground from '@/views/layout/Foreground'
import { useNavigation } from '@react-navigation/native'

const Notifications = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Foreground>

      </Foreground>
    </View>
  )
}

export default Notifications
